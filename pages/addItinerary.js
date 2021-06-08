import Layout from "../components/Layout/Layout.jsx";
import AddItinerary from "../components/AddItinerary/AddItinerary";
import { pageAuthenticated } from "../auth/auth";

export default function Itinerary({ data, open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen}>
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
