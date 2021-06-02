import Layout from "../components/Layout/Layout.jsx";

export default function Login() {
  return (
    <Layout>
      <h1>Login</h1>
      <form action="/api/login" method="post">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
        <input type="submit" value="Login" />
      </form>
    </Layout>
  );
}
