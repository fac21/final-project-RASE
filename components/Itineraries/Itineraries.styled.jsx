import styled from "styled-components";

export const StyledItineraries = styled.section`
  max-width: 20rem;
  min-width: 5rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
  box-shadow: 10px 10px 5px #8080803f;
  padding-bottom: 2rem;
  border: 1px solid #8080803f;

  img {
    object-fit: cover;
    margin-bottom: 1rem;
    max-width: 16rem;
    height: 12rem;
  }

  .itinerary_info {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }

  .itinerary_type {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    gap: 1rem;
    width: 100%;
  }

  a {
    text-align: center;
    font-size: 1rem;
    text-transform: uppercase;
    color: #627964;
    display: block;
  }

  p {
    margin-top: 1rem;
  }
`;
