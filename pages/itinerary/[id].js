import Layout from "../../components/Layout/Layout.jsx";
import Head from "next/head";
import Image from "next/image";
import { getAllItineraryIds, getItineraryData } from "../../database/model";
import styled from "styled-components";

const StyledSection = styled.section`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
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

const StyledTitle = styled.title`
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    margin: 1rem;
  }
`;

const StyledArticle = styled.article`
  display: flex;
  justify-content: center;
  margin: 2rem;
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
      <Head>
        <title>{itineraryObject.name}</title>
      </Head>
      <StyledSection>
        <StyledTitle>
          <h1>{itineraryObject.name}</h1>
          <p>{itineraryObject.duration} days</p>
        </StyledTitle>
        <StyledDiv>
          <Image
            src={itineraryObject.img}
            alt="itinerary"
            width={400}
            height={400}
          ></Image>
        </StyledDiv>
        <StyledArticle>
          <p>£{itineraryObject.budget}</p>
          <p>{itineraryObject.need_car ? "Need car" : "Don't need car"}</p>
        </StyledArticle>
        <hr></hr>
        <StyledUl>
          <ul>
            {Object.keys(description).map((key) => {
              return (
                <li key={description[key].description}>
                  <p>{key}:</p>
                  <p>
                    <span className="location">
                      {description[key].location}
                    </span>
                    <span className="description">
                      {description[key].description}
                    </span>
                  </p>
                </li>
              );
            })}
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
