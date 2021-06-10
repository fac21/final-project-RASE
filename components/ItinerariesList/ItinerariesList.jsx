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
                    <img src={itinerary.img} alt={itinerary.name} />
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
