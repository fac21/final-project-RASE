import React from "react";
import db from "../database/connection";
import Layout from "../components/Layout/Layout.jsx";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

export default function Home({ data }) {
  const MapWithNoSSR = dynamic(() => import("../components/Map/Map"), {
    ssr: false,
  });
  return (
    <Layout home>
      <h1>travel app</h1>
      <div id="mapid">
        <MapWithNoSSR />
      </div>
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
