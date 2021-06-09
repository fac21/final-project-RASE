import { authenticated } from "../../auth/auth";
import { insertItineraries } from "../../database/model";
import getMap from "../../map/map";

export default authenticated(async (req, res) => {
  const method = req.method;
  const session = req.session;

  switch (method) {
    case "POST": {
      const itineraryObj = formatItineraryObj(req);
      itineraryObj.user_id = session.data.user.id;
      const { longitude, latitude, region } = await getMap(req.body.postcode);
      itineraryObj.longitude = longitude;
      itineraryObj.latitude = latitude;
      itineraryObj.region = region;
      try {
        await insertItineraries(itineraryObj);
        res.redirect("/");
        break;
      } catch (error) {
        console.error(error);
        res.status(200).json({ Error: "Error with the server" });
        break;
      }
    }
    default: {
      res.status(500).json({ message: "We method not accepted" });
    }
  }
});

function formatItineraryObj(req) {
  const { name, img, country, duration, budget, need_car } = req.body;
  const itineraryObj = { name, img, country, duration, budget, need_car };
  itineraryObj.need_car = itineraryObj.need_car.toLowerCase() === "yes";
  itineraryObj.budget = parseInt(itineraryObj.budget);
  itineraryObj.duration = parseInt(itineraryObj.duration);
  itineraryObj.description = {};
  const keysArray = Object.keys(req.body);
  const filteredDaysArray = keysArray.filter(
    (key) => key.includes("Day") || key.includes("Description")
  );

  filteredDaysArray.forEach((element, index) => {
    if (element.includes("Day")) {
      itineraryObj.description[element] = {
        location: req.body[filteredDaysArray[index]],
        description: req.body[filteredDaysArray[index + 1]],
      };
    }
  });

  return itineraryObj;
}
