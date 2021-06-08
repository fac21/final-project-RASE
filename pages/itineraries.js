import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import Itineraries from "../components/Itineraries/Itineraries.jsx";
import SelectCountry from "../components/SelectCountry/SelectCountry.jsx";
import { selectItineraries } from "../database/model";
import { StyledSearchBar } from "../styles/StyledComponents/styles.styled.jsx";

export default function Itinerary({ data, open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen}>
      <h1>Itineraries</h1>
      <form>
        <StyledSearchBar>
          <input type="text" placeholder="Search itineraries"></input>
        </StyledSearchBar>
      </form>

      <Itineraries data={data} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await selectItineraries();
  return {
    props: {
      data,
    },
  };
}
