import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StyledItineraries } from "./Itineraries.styled.jsx";

export default function Itineraries({ data }) {
  const itineraries = data.map((itinerary) => {
    return (
      <StyledItineraries key={itinerary.id}>
        <Link href={`/itineraries/${itinerary.id}`}>
          <a>
            <Image
              src={itinerary.img}
              alt={itinerary.name + "photo"}
              width={500}
              height={300}
            />
          </a>
        </Link>
        <div className="itinerary_info">
          <h2>
            <Link href={`/itineraries/${itinerary.id}`}>
              <a>{itinerary.name}</a>
            </Link>
          </h2>
          <p>{itinerary.duration} days</p>
          <div className="itinerary_type">
            <p>{itinerary.need_car ? "need car" : "don't need car"}</p>
            <p>£{itinerary.budget}</p>
          </div>
        </div>
      </StyledItineraries>
    );
  });

  return <>{itineraries}</>;
}
