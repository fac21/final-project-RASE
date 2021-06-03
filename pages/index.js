import React from "react";
import db from "../database/connection";
import Layout from "../components/Layout/Layout.jsx";

export default function Home({ data }) {

  return (
    <Layout home>
      <h1>travel app</h1>
    </Layout>
  );
}

export async function getServerSideProps() {
  const GET_USER = "SELECT * FROM user_table;";
  const data_long = await db.query(GET_USER);
  const data = data_long.rows;
  return {
    props: {
      data,
    },
  };
}
