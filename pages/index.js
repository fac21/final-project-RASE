import React from "react";
import db from "../database/connection";
import Layout from "../components/Layout/Layout.jsx";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function Home({ data }) {
  const MapWithNoSSR = dynamic(() => import("../components/Map/Map"), {
    ssr: false,
  });

  const [places, setPlaces] = useState([]);

  function addPosition(event) {
    event.preventDefault();
    const place = {};
    const inputs = event.target.querySelectorAll("input");

    inputs.forEach((input) => {
      if (input.name === "location") {
        place[input.name] = input.value;
        input.value = "";
      }
      if (input.name && input.name !== "location") {
        place[input.name] = parseFloat(input.value);
        input.value = "";
      }
    });

    setPlaces([...places, place]);
    event.target[0].value = event.target[1].value;
  }

  return (
    <Layout home>
      <h1>travel app</h1>
      <div className={styles.mapClass} id="mapid">
        <form onSubmit={addPosition}>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="location"
            required
          />
          <input type="text" name="lat" id="lat" placeholder="lat" required />
          <input
            type="text"
            name="long"
            id="long"
            placeholder="long"
            required
          />
          <input type="submit" value="add" />
        </form>
        <MapWithNoSSR places={places} />
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
