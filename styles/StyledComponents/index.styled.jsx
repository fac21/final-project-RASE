import styled from "styled-components";

export const StyledSection = styled.section`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 3rem;
    text-align: center;
  }
`;

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 40rem;
  padding: 1.5rem;
`;

export const Box = styled.div`
  height: 14rem;
  background: #dbcfb0;
  text-align: center;
  padding: 2rem;
  display: grid;
  place-content: center;
`;