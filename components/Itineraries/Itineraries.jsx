import React from "react";
import Itinerary from "../../pages/itineraries";

export default function Itineraries({ data }) {
  console.log("test", data);

  const itineraries = data.map((itinerary) => {
    return (
      <section>
        <h1>
          <a href="/">{itinerary.name}</a>
        </h1>
        <p>{itinerary.duration} days</p>
        <p>{itinerary.need_car ? "need car" : "don't need car"}</p>
        <p>£{itinerary.budget}</p>
      </section>
    );
  });

  return <>{itineraries}</>;

  // const donutArray = data.map((itinerary) => {
  //   return (
  //     <h1>Test</h1>
  //     //   <section className="eachDonut" key={donut.id}>
  //     //     <h1 className="donut__name">{donut.name}</h1>
  //     //     <img
  //     //       className="donut__image"
  //     //       src={donut.image}
  //     //       alt={"picture of " + donut.name + " donut"}
  //     //     />
  //     //     <p className="donut__description">{donut.description}</p>
  //     //     <p className="donut__price">£{donut.price.toFixed(2)}</p>
  //     //     <button className={donut.name} onClick={addDonut}>
  //     //       Gimme a Donut
  //     //     </button>
  //     // </section>
  //   );
  // }
}
