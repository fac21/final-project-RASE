import React from "react";
import db from "../database/connection";
import Layout from "../components/Layout/Layout.jsx";
import Link from "next/link";
import SelectCountry from "../components/HomePage/SelectCountry.jsx";
import Image from "next/image";
import ItinerariesList from "../components/HomePage/ItinerariesList.jsx";
import styled from "styled-components";

const StyledSection = styled.section`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 3rem;
    text-align: center;
  }
`;

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 40rem;
  padding: 1.5rem;
`;

const Box = styled.div`
  height: 14rem;
  background: #dbcfb0;
  text-align: center;
  padding: 2rem;
  display: grid;
  place-content: center;
`;

export default function Home({ data, open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen} home>
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
      <ItinerariesList />
      <StyledSection>
        <hr></hr>
        <p> FAC Student Project Spring 2021 </p>
      </StyledSection>
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
