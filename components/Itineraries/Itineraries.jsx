import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StyledItineraries } from "./Itineraries.styled.jsx";

export default function Itineraries({ data }) {

  const itineraries = data.map((itinerary) => {

    return (
      <StyledItineraries key={itinerary.id}>
        <div className="itinerary_info">
          <img
            src={itinerary.img}
            alt={itinerary.name + "photo"}
            width={250}
            height={200}
          />
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
