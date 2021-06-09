import Layout from "../components/Layout/Layout.jsx";
import Head from "next/head";

export default function Logout({ open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen}>
      <Head>
        <title>Log out</title>
      </Head>
      <form action="/api/logout" method="post">
        <input id="logout" type="submit" value="Logout" />
      </form>
    </Layout>
  );
}
