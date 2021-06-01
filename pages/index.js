import React from "react";
import db from "../database/connection";

export default function Home({ data }) {
  console.log(data);
  return (
    <div>
      <h1>travel app</h1>
    </div>
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
