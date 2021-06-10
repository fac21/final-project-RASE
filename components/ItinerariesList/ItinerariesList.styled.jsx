import styled from "styled-components";

export const StyledItinerariesSection = styled.section`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;

  hr {
    margin-top: 3rem;
  }
  h1 {
    text-align: center;
    margin-top: 3rem;
  }

  ul {
    margin: 0 auto 0 auto;
    list-style: none;
    max-width: 40rem;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
  }

  a {
    text-align: center;
    font-size: 1rem;
    text-transform: uppercase;
    color: #627964;
    display: block;
    margin-top: 2rem;
  }

  p {
    margin-top: 1rem;
  }

  ul img{
    max-width: 9.5rem;
    height: 9.5rem;
    object-fit: cover;
  }


`;
