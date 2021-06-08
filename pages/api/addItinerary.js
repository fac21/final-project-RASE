import { authenticated } from "../../auth/auth";

export default authenticated(async (req, res) => {
  const method = req.method;

  switch (method) {
    case "GET": {
      res.status(200).json({ method });
      break;
    }
    case "POST": {
      const { name, img, country, duration, budget, car } = req.body;
      const itineraryObj = { name, img, country, duration, budget, car };
      const descriptionObj = {};
      const keysArray = Object.keys(req.body);
      const filteredDaysArray = keysArray.filter(
        (key) => key.includes("Day") || key.includes("Description")
      );
      filteredDaysArray.forEach((element, index) => {
        if (element.includes("Day"))
          descriptionObj[element] = req.body[filteredDaysArray[index + 1]];
      });
      itineraryObj.description = descriptionObj;
      console.log(itineraryObj);

      try {
        res.redirect("/");
        break;
      } catch (error) {
        console.error(error);
        res.status(200).json({ Error: "This account already exists" });
        break;
      }
    }
    default: {
      res.status(500).json({ message: "We only accept POST requests" });
    }
  }
});

// {
//   //  name: 'ewewq',
//   // img: 'ewqewq',
//   // location: 'England',
//   // duration: 'ewqewq',
//   // budget: 'ewqewq',
//   // car: 'yes',
//   'Day 1': 'eqwewq',
//   Description_1: 'ewqewq',
//   'Day 2': 'ewqew',
//   Description_2: 'ewqe',
//   'Day 3': 'weqew',
//   Description_3: 'ewqew',
//   'Day 4': 'ewqew',
//   Description_4: 'ewq',
//   'Day 5': 'weqew',
//   Description_5: 'ewqe'
// }
