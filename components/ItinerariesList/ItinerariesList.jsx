import Image from "next/image";
import Link from "next/link";
import { StyledItinerariesSection } from "./ItinerariesList.styled.jsx";

export default function ItinerariesList({ data }) {
  return (
    <>
      <StyledItinerariesSection>
        <hr></hr>
        <h1>Itineraries</h1>
        <ul>
          {data.map((itinerary) => {
            return (
              <Link key={itinerary.name} href={`/itinerary/${itinerary.id}`}>
                <a>
                  <li>
                    <Image
                      src={itinerary.img}
                      alt={itinerary.name}
                      height="200"
                      width="200"
                    />
                  </li>
                  <p>{itinerary.name}</p>
                </a>
              </Link>
            );
          })}
        </ul>
        <Link href="/itineraries">
          <a>See all</a>
        </Link>
      </StyledItinerariesSection>
    </>
  );
}

// to add at a later stage - map through all itineraries and display the image from each itinerary (like in Week 9)
