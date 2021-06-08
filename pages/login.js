import Layout from "../components/Layout/Layout.jsx";
import { pageAuthenticated } from "../auth/auth";
import {
  StyledSection,
  StyledForm,
} from "../styles/styledcomponents/auth.styled";
import Link from "next/link";
import Image from "next/image";

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
    <Layout open={open} setOpen={setOpen} login>
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
        <Link href="/signup">
          <p>
            Don't have an account? <a>Sign up</a>
          </p>
        </Link>
      </StyledSection>
    </Layout>
  );
}
