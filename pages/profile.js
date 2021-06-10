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
padding: 2rem;

> * {
  margin-top: 2rem;
}


h1{
  float: left;
  font-size: 1.7rem;
}

`
const StyledUserSection = styled.aside`
  max-width: 35rem;
  margin: 2rem auto 2rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
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

.itineraryList{
  display: flex;
  flex-wrap: wrap;
  
}

.itineraryList > *{
  width: 20rem;
}

.addItinerary{
    max-width: 20rem;
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    margin-top: 2rem;
    box-shadow: 10px 10px 5px #8080803f;
    padding: 1rem;
    border: 1px solid #8080803f;
    display: grid;
    place-content: center;
    color: orange;
    // background-color:#627964;
}

a {
  text-align: center;
  font-size: 1rem;
  text-transform: uppercase;
  color: #627964;
  display: block;
}

`

export default function Profile({ open, setOpen, logged, user, itineraries }) {

  return (
    <Layout open={open} setOpen={setOpen} logged={logged}>
      <Head>
        <title>My Profile</title>
      </Head>

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

        <StyledItinerarySection>
          <hr></hr>
          <h2>My Itineraries</h2>
          <div className="itineraryList">
            <Itineraries data={itineraries} />
            <div className="addItinerary">
              <Link href="/addItinerary">
                <a>Add Itinerary</a>
              </Link>
            </div>
          </div>

        </StyledItinerarySection>
      </StyledSection>
      <form action="/api/logout" method="post">
        <input class="input" id="logout" type="submit" value="Logout" />
      </form>
    </Layout>
  );
}


export async function getServerSideProps({ req, res }) {
  await pageAuthenticated(req);
  const sessionData = req.session;
  if (!sessionData) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const userId = sessionData.data.user.id;
  const itineraries = await getUsersItinerary(userId);



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
