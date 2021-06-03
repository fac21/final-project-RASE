import Image from "next/image";

export default function Itinerary() {
  return (
    <Layout>
          <h1>Itinerary</h1>
            <Image
            src="/../../public/pembrokeshire.jpg"
            alt="pembrokeshire"
            width={500}
            height={500}
          />
          <p>Day One- Oxford, Stratford Upon Avon</p>
<p>Day Two: Cotswolds</p>
          <p>Day Three: Bath, Wells, Glastonbury</p>
          <h2>Map</h2>
    </Layout>
  );
}

// to add at a later stage - map through all itineraries and display the image from each itinerary (like in Week 9)

