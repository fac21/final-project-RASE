import Layout from "../../components/Layout/Layout.jsx";
import Image from "next/image";
import { getAllItineraryIds, getItineraryData } from "../../database/model";
import styled from "styled-components";

const StyledSection = styled.section`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  h1 {
    text-align: center;
  }
`;

const StyledDiv = styled.div`
  margin-top: 3rem;
  display: grid;
  place-content: center;
`;

export default function Itinerary({ itineraryData }) {
  const itineraryObject = JSON.parse(itineraryData);
  return (
    <Layout>
      <StyledSection>
        <h1>{itineraryObject.name}</h1>
        <StyledDiv>
          <Image
            src={itineraryObject.img}
            alt="itinerary"
            width={400}
            height={400}
          ></Image>
        </StyledDiv>
        <p>{itineraryObject.need_car}</p>
        <p>£{itineraryObject.budget}</p>
        <hr></hr>
        <p>{itineraryObject.description}</p>
      </StyledSection>
    </Layout>
  );
}

export async function getStaticPaths() {
  const pathData = await getAllItineraryIds();
  const paths = pathData.map(({ id }) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const itinerary = await getItineraryData(params.id);
  const itineraryData = JSON.stringify(itinerary);
  return {
    props: { itineraryData },
  };
}
