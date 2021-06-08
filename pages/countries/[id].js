import Itineraries from "../../components/Itineraries/Itineraries.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import { selectItinerariesByCountry } from "../../database/model";
import { StyledSearchBar } from "../../styles/StyledComponents/styles.styled.jsx";

export default function Country({ data, country, open, setOpen }) {
  console.log(data);
  return (
    <Layout open={open} setOpen={setOpen}>
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
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const country = capitalize(context.query.id).replace("_", " ");
  const data = await selectItinerariesByCountry(country);
  return {
    props: {
      data,
      country: country,
    },
  };
}
