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
    margin-top: 0.5rem;
    list-style: none;
    display: grid;
    grid-gap: 1rem;
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
`;
