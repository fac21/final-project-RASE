import Layout from "../../components/Layout/Layout.jsx";
import Head from "next/head";
import Image from "next/image";
import { getItineraryData } from "../../database/model";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

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

const StyledTitle = styled.div`
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
  const description = itineraryData.description;
  const MapWithNoSSR = dynamic(
    () => import("../../components/Map1/mapone.jsx"),
    {
      ssr: false,
    }
  );

  const [mapMarkers, setMapMarkers] = useState([]);

  useEffect(() => {
    const temporaryMapMarkers = Object.keys(description).map((key) => {
      if (description[key].location) return description[key].location;
      return;
    });

    setMapMarkers(temporaryMapMarkers);

    return;
  }, []);

  console.log("End", mapMarkers);

  return (
    <Layout open={open} setOpen={setOpen}>
      <Head>
        <title>{itineraryData.name}</title>
      </Head>
      <StyledSection>
        <StyledTitle>
          <h1>{itineraryData.name}</h1>
          <p>{itineraryData.duration} days</p>
        </StyledTitle>
        <StyledDiv>
          <Image
            src={itineraryData.img}
            alt="itinerary"
            width={400}
            height={400}
          ></Image>
          <div id="mapid" className="mapClass">
            <MapWithNoSSR mapMarkers={mapMarkers} />
          </div>
        </StyledDiv>
        <StyledArticle>
          <p>£{itineraryData.budget}</p>
          <p>{itineraryData.need_car ? "Need car" : "Don't need car"}</p>
        </StyledArticle>
        <hr></hr>
        <StyledUl>
          <ul>
            {Object.keys(description).map((key) => {
              return (
                <li key={description[key].description + Math.random()}>
                  <p>{key}:</p>
                  <p>
                    {description[key].location ? (
                      <span className="location">
                        {description[key].location.location}
                      </span>
                    ) : (
                      ""
                    )}
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

// export async function getStaticPaths() {
//   const pathData = await getAllItineraryIds();
//   const paths = pathData.map(({ id }) => {
//     return {
//       params: {
//         id: id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps({ params }) {
  const itineraryData = await getItineraryData(params.id);

  console.log(itineraryData);

  return {
    props: { itineraryData },
  };
}
