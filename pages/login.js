import Layout from "../components/Layout/Layout.jsx";
import Head from "next/head";
import { pageAuthenticated } from "../auth/auth";
import {
  StyledSection,
  StyledForm,
} from "../styles/StyledComponents/auth.styled";
import Link from "next/link";

export async function getServerSideProps({ req, res }) {
  await pageAuthenticated(req);
  const sessionData = req.session;

  if (sessionData) {
    return {
      redirect: {
        destination: "/logout",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Login({ open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen}>
      <Head>
        <title>Log in</title>
      </Head>
      <StyledSection>
        <h1>Welcome Back!</h1>
        <p>Log in to continue</p>
        <StyledForm action="/api/login" method="post">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          <button type="submit" value="Login">
            Login
          </button>
        </StyledForm>

        <p>
          Don't have an account?{" "}
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        </p>
      </StyledSection>
    </Layout>
  );
}
