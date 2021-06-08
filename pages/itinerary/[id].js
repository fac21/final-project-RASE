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
  li {
    margin: 1rem;
    list-style-type: none;
  }
`;

const StyledDiv = styled.div`
  margin-top: 3rem;
  display: grid;
  place-content: center;
`;

const StyledP = styled.p`
  display: flex;
  justify-content: center;
  margin: 1rem;
  gap: 1rem;
  font-weight: 700;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  .description {
    padding: 1rem;
    font-style: italic;
  }
`;

export default function Itinerary({ itineraryData, open, setOpen }) {
  const itineraryObject = JSON.parse(itineraryData);
  const description = itineraryObject.description;
  return (
    <Layout open={open} setOpen={setOpen}>
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
        <StyledP>
          <p>£{itineraryObject.budget}</p>
          <p>{itineraryObject.need_car ? "Need car" : "Don't need car"}</p>
        </StyledP>
        <hr></hr>
        <StyledUl>
          <ul>
            {Object.keys(description).map((key) => (
              <li key={description[key]}>
                <p>{key}:</p>
                <p class="description">{description[key].description}</p>
              </li>
            ))}
          </ul>
        </StyledUl>
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
