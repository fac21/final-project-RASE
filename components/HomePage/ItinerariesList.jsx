import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function ItinerariesList() {
  return (
    <>
      <h1>Itineraries</h1>
      <ul className="grid">
        <li>
          <Image
            src="/pembrokeshire.jpg"
            alt="pembrokeshire"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image src="/london.jpg" alt="london" width={200} height={200} />
        </li>
        <li>
          <Image src="/scotland.jpg" alt="scotland" width={200} height={200} />
        </li>
        <li>
          <Image
            src="/stonehenge.jpg"
            alt="stonehenge"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src="/yorkshire.jpg"
            alt="yorkshire"
            width={200}
            height={200}
          />
        </li>
      </ul>
      <Link href="/itineraries">
        <a>See all</a>
      </Link>
    </>
  );
}

// to add at a later stage - map through all itineraries and display the image from each itinerary (like in Week 9)
