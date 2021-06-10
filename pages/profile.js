import Layout from "../components/Layout/Layout.jsx";
import Head from "next/head";
import { pageAuthenticated } from "../auth/auth";

export default function Profile({ open, setOpen, logged, user }) {
  return (
    <Layout open={open} setOpen={setOpen} logged={logged}>
      <Head>
        <title>My Pofile</title>
      </Head>
      <h1>Welcome back {user.username}</h1>
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
    props: {
      logged: true,
      user: {
        ...sessionData.data.user
      }
    },
  };
}
