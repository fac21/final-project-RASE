import React from "react";
import db from "../database/connection";
import Layout from "../components/Layout/Layout.jsx";
import Link from "next/link";
import SelectCountry from "../components/HomePage/SelectCountry.jsx";
import Image from "next/image";
import ItinerariesList from "../components/HomePage/ItinerariesList.jsx";
import styled from "styled-components";

const StyledSection = styled.section`
  height: 15rem;
  margin: 2.5rem;
  padding: 2rem;
  display: grid;
  background: #dbcfb0;
  place-content: center;
  text-align: center;
`;

export default function Home({ data, open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen} home>
      <SelectCountry />
      <Image
        src="/cornwall.jpg"
        alt="A cove with clear water and boats in the water and houses on the cliff overlooking the water"
        layout=""
        width={700}
        height={475}
      />
      <StyledSection>
        <h4>
          Discover the secres of the UK and share your itineraries with other
          British tourism lovers
        </h4>
      </StyledSection>
      <ItinerariesList />
      <section>
        <p> FAC Student Project Spring 2021 </p>
      </section>
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
