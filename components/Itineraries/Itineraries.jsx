import React from "react";
import Link from "next/link";
import { StyledItineraries } from "./Itineraries.styled.jsx";

export default function Itineraries({ data }) {
  const itineraries = data.map((itinerary) => {
    return (
      <StyledItineraries key={itinerary.id}>
        <div className="itinerary_info">
          <Link href={`/itinerary/${itinerary.id}`}>
            <a>
              <img src={itinerary.img} alt={itinerary.name + "photo"} />
            </a>
          </Link>
          <h2>
            <Link href={`/itinerary/${itinerary.id}`}>
              <a>{itinerary.name}</a>
            </Link>
          </h2>
          <p>{itinerary.duration} days</p>
          <div className="itinerary_type">
            <p>£{itinerary.budget}</p>
            <p>{itinerary.need_car ? "Need car" : "Don't need car"}</p>
          </div>
        </div>
      </StyledItineraries>
    );
  });
  return <>{itineraries}</>;
}
