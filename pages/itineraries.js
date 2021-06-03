import React from "react";
import db from "../database/connection";
import Layout from "../components/Layout/Layout.jsx";
import Itineraries from "../components/Itineraries/Itineraries.jsx";

export default function Itinerary({ data }) {
  return (
    <Layout>
      <h1>Itineraries</h1>
      <form>
        <input type="text" placeholder="Search itineraries"></input>
      </form>
      <Itineraries data={data} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const GET_USER = "SELECT * FROM itineraries_table;";
  const data_long = await db.query(GET_USER);
  const data = data_long.rows;
  return {
    props: {
      data,
    },
  };
}
