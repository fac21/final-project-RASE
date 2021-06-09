import Layout from "../components/Layout/Layout.jsx";
import Head from "next/head";
import AddItinerary from "../components/AddItinerary/AddItinerary";
import { pageAuthenticated } from "../auth/auth";

export default function addItinerary({ data, open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen}>
      <Head>
        <title>Add Itinerary</title>
      </Head>
      <h1>Add Itinerary</h1>
      <AddItinerary />
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  await pageAuthenticated(req);
  const sessionData = req.session;

  if (!sessionData) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
