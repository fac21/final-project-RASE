import React from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout.jsx";
import Itineraries from "../components/Itineraries/Itineraries.jsx";
import SelectCountry from "../components/SelectCountry/SelectCountry.jsx";
import { selectItineraries } from "../database/model";
import { StyledSearchBar } from "../styles/StyledComponents/styles.styled.jsx";
import { pageAuthenticated } from "../auth/auth";

export default function Itinerary({ data, open, setOpen, logged }) {
  return (
    <Layout open={open} setOpen={setOpen} logged={logged}>
      <Head>
        <title>Itineraries</title>
      </Head>
      <h1>Itineraries</h1>
      <SelectCountry />
      <form>
        <StyledSearchBar>
          <input type="text" placeholder="Search itineraries"></input>
        </StyledSearchBar>
      </form>
      <Itineraries data={data} />
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  await pageAuthenticated(req);
  const data = await selectItineraries();
  const sessionData = req.session;

  if (sessionData) {
    return {
      props: {
        logged: true,
        data,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}
