import Layout from "../components/Layout/Layout.jsx";
import Head from "next/head";
import { pageAuthenticated } from "../auth/auth";

export default function Logout({ open, setOpen, logged }) {
  return (
    <Layout open={open} setOpen={setOpen} logged={logged}>
      <Head>
        <title>Log out</title>
      </Head>
      <form action="/api/logout" method="post">
        <input class="input" id="logout" type="submit" value="Logout" />
      </form>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  await pageAuthenticated(req);
  const sessionData = req.session;

  if (sessionData) {
    return {
      props: {
        logged: true,
      },
    };
  }

  return {
    props: {},
  };
}
