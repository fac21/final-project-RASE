import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout.jsx";
import SelectCountry from "../components/SelectCountry/SelectCountry.jsx";
import Image from "next/image";
import ItinerariesList from "../components/ItinerariesList/ItinerariesList.jsx";
import { selectItineraries } from "../database/model";
import {
  StyledSection,
  StyledContainer,
  Box,
} from "../styles/StyledComponents/index.styled.jsx";

import dynamic from "next/dynamic";

export default function Home({ data, open, setOpen, access_token }) {
  const MapWithNoSSR = dynamic(() => import("../components/Map1/mapone.jsx"), {
    ssr: false
  });
  return (
    <Layout open={open} setOpen={setOpen} home>
      <Head>
        <title>Home</title>
      </Head>
      <div id="mapid" className="mapClass">
        <MapWithNoSSR />
      </div>
      <SelectCountry />
      <StyledSection>
        <StyledContainer>
          <Image
            src="/cornwall.jpg"
            alt="A cove with clear water and boats in the water and houses on the cliff overlooking the water"
            layout=""
            width={700}
            height={475}
          />
        </StyledContainer>
        <StyledContainer>
          <Box>
            <h4>
              Discover the secrets of the UK and share your itineraries with
              other British tourism lovers
            </h4>
          </Box>
        </StyledContainer>
      </StyledSection>

      <ItinerariesList data={data.splice(0, 6)} />
      <StyledSection>
        <hr></hr>
        <p> FAC Student Project Spring 2021 </p>
      </StyledSection>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await selectItineraries();
  return {
    props: {
      data
    },
  };
}
