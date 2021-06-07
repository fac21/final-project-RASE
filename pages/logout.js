import Layout from "../components/Layout/Layout.jsx";

export default function Logout({ open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen}>
      <form action="/api/logout" method="post">
        <input type="submit" value="Logout" />
      </form>
    </Layout>
  );
}
