import Layout from "../components/Layout/Layout.jsx";
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

export default function SignUp({ open, setOpen }) {
  return (
    <Layout login open={open} setOpen={setOpen}>
      <StyledSection>
      <img className="blob" src="/blob.svg"/>
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
          <p class="passwordReqs" id="passwordRequirements">
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

        <Link href="/login">
          <p>
            Already have an account? <a>Log in</a>
          </p>
        </Link>
      </StyledSection>
    </Layout>
  );
}
