import Layout from "../components/Layout/Layout.jsx";
import Head from "next/head";
import Link from "next/link";
import { pageAuthenticated } from "../auth/auth";
import {
  StyledSection,
  StyledForm,
} from "../styles/StyledComponents/auth.styled";

export async function getServerSideProps({ req, res }) {
  await pageAuthenticated(req);
  const sessionData = req.session;

  if (sessionData) {
    return {
      props: {
        logged: true
      },
    };
  }

  return {
    props: {},
  };
}

export default function SignUp({ open, setOpen, logged }) {
  return (
    <Layout login open={open} setOpen={setOpen} logged={logged}>
      <Head>
        <title>Sign up</title>
      </Head>
      <StyledSection>
        <img className="blob" src="/blob.svg" />
        <h1>Create your account</h1>
        <StyledForm action="/api/signup" method="POST">
          <label htmlFor="username">
            Username
            <span aria-hidden="true">*</span>
          </label>
          <input id="username" name="username" type="text" required />

          <label htmlFor="email">
            Email address
            <span aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="password">
            Password
            <span aria-hidden="true">*</span>
          </label>
          <p className="passwordReqs" id="passwordRequirements">
            Passwords must contain at least one letter and one number, and
            contain at least 8 characters.
          </p>
          <input
            id="password"
            name="password"
            type="password"
            // pattern=".*\d.*"
            // minLength="8"
            aria-describedby="passwordRequirements"
            required
          />
          <button>Create account</button>
        </StyledForm>

        <p>
          Already have an account?{" "}
          <Link href="/login">
            <a>Log in</a>
          </Link>
        </p>
      </StyledSection>
    </Layout>
  );
}
