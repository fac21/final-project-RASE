import Layout from "../components/Layout/Layout.jsx";
import Head from "next/head";
import { pageAuthenticated } from "../auth/auth";
import styled from "styled-components";
import Link from "next/link";
import { getUsersItinerary } from "../database/model";
import Itineraries from "../components/Itineraries/Itineraries.jsx"

const StyledSection = styled.section`
max-width: 40rem;
margin-left: auto;
margin-right: auto;

> * {
  margin-top: 2rem;
}


h1{
  float: left;
  font-size: 1.7rem;
}
a{
  float: right;
  padding-right: 2rem;
  text-decoration: underline;
  pointer: cursor;
}
`
const StyledUserSection = styled.aside`
  max-width: 35rem;
  margin: 2rem auto 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  clear: both;

  h2{
    font-size: 1rem;
  }

  img{
    width: 3rem;
    height: 3rem;
  }

  .user-profile {
    border: solid black 1px;
    border-radius: 50%;
    padding: 0.5rem;
  }

  .user-info{
    margin-top: 2rem;
  }
`

const StyledItinerarySection = styled.section`
max-width: 35rem;
> * {
  margin-top: 2rem;
}

`

export default function Profile({ open, setOpen, logged, user, itineraries }) {

  return (
    <Layout open={open} setOpen={setOpen} logged={logged}>
      <Head>
        <title>My Profile</title>
      </Head>

      <Itineraries data={itineraries} />



      <StyledSection>
        <h1>My Profile</h1>

        <StyledUserSection>
          <div className="user-info">
            <h2>Hi, I'm {user.username}</h2>
            <p>{user.email}</p>
          </div>
          <div className="user-container">
            <img className="user-profile" src="/user.svg" alt="default-user-profile-image" />
          </div>

        </StyledUserSection>
        {/* <Link href="/profile">
          <a>Edit</a>
        </Link> */}

        <StyledItinerarySection>
          <hr></hr>
          <h2>My Itineraries</h2>

          {/* <div className="itineraryImage">
            
            <Link href="">
              <p>{itineraries.name}</p>
            </Link>
          </div> */}
          <Link href="/addItinerary">
            <a>Add Itinerary</a>
          </Link>
        </StyledItinerarySection>
      </StyledSection>
    </Layout>
  );
}


export async function getServerSideProps({ req, res }) {
  await pageAuthenticated(req);
  const sessionData = req.session;
  const userId = sessionData.data.user.id;
  const itineraries = await getUsersItinerary(userId);


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
      },
      itineraries
    },
  };
}
