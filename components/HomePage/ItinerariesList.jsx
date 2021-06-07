import Image from "next/image";
import Link from "next/link";
import { StyledItinerariesSection } from "./ItinerariesList.styled.jsx";

export default function ItinerariesList() {
  return (
    <>
      <StyledItinerariesSection>
        <hr></hr>
        <h1>Itineraries</h1>
        <ul>
          <li>
            <Image
              src="/pembrokeshire.jpg"
              alt="pembrokeshire"
              layout="intrinsic"
              width={400}
              height={400}
            />
          </li>
          <li>
            <Image src="/london.jpg" alt="london" width={400} height={400} />
          </li>
          <li>
            <Image
              src="/scotland.jpg"
              alt="scotland"
              width={400}
              height={400}
            />
          </li>
          <li>
            <Image
              src="/stonehenge.jpg"
              alt="stonehenge"
              width={400}
              height={400}
            />
          </li>
          <li>
            <Image
              src="/yorkshire.jpg"
              alt="yorkshire"
              width={400}
              height={400}
            />
          </li>
        </ul>
        <Link href="/itineraries">
          <a>See all</a>
        </Link>
      </StyledItinerariesSection>
    </>
  );
}

// to add at a later stage - map through all itineraries and display the image from each itinerary (like in Week 9)
