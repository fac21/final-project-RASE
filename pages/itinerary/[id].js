import Layout from "../../components/Layout/Layout.jsx";
import Head from "next/head";
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
  flex-direction: column;
  align-items: center;
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

const StyledImage = styled.div`
  img {
    object-fit: cover;
    width: 20rem;
    height: 12rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function Itinerary({ itineraryData, open, setOpen }) {
  const description = itineraryData.description;
  const MapWithNoSSR = dynamic(
    () => import("../../components/Map/MapComponent.jsx"),
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
          <StyledImage>
            <img src={itineraryData.img} alt="itinerary" />
          </StyledImage>
        </StyledDiv>
        <StyledArticle>
          <p>Rough budget for trip: £{itineraryData.budget}</p>
          <p>
            {itineraryData.need_car
              ? "You'll need a car"
              : "You don't need a car"}
          </p>
        </StyledArticle>
        <hr></hr>
        <h1>Itinerary</h1>
        <StyledUl>
          <ul>
            {Object.keys(description)
              .sort()
              .map((key) => {
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
        <hr></hr>
        <h1>Map</h1>
        <div id="mapid" className="mapClass">
          <MapWithNoSSR mapMarkers={mapMarkers} />
        </div>
      </StyledSection>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const itineraryData = await getItineraryData(params.id);

  return {
    props: { itineraryData },
  };
}
