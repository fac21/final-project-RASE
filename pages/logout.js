import Layout from "../components/Layout/Layout.jsx";

export default function Logout() {
  return (
    <Layout>
      <form action="/api/logout" method="post">
        <input type="submit" value="Logout" />
      </form>
    </Layout>
  );
}
