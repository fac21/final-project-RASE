import Itineraries from "../../components/Itineraries/Itineraries.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import Head from "next/head";
import { selectItinerariesByCountry } from "../../database/model";
import { StyledSearchBar } from "../../styles/StyledComponents/styles.styled.jsx";
import SelectCountry from "../../components/SelectCountry/SelectCountry.jsx";
import { pageAuthenticated } from "../../auth/auth";

export default function Country({ data, country, open, setOpen, logged }) {
  return (
    <Layout open={open} setOpen={setOpen} logged={logged}>
      <Head>
        <title>{country} Itineraries</title>
      </Head>
      <SelectCountry />
      <h1>{country}</h1>
      <form>
        <StyledSearchBar>
          <input type="text" placeholder="Search itineraries"></input>
        </StyledSearchBar>
      </form>

      <Itineraries data={data} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  await pageAuthenticated(context.req);
  const sessionData = context.req.session;
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const country = context.query.id
    .split("_")
    .map((word) => capitalize(word))
    .join(" ");
  const data = await selectItinerariesByCountry(country);

  if (sessionData) {
    return {
      props: {
        data,
        country: country,
        logged: true,
      },
    };
  }

  return {
    props: {
      data,
      country: country,
    },
  };
}
