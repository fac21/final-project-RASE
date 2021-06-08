import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 2rem;
  h1 {
    margin-top: 3rem;
  }
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledForm = styled.form`
  padding: 1rem;
  height: 40vh;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 5%);

  > * {
    margin-top: 1rem;
  }

  input {
    line-height: 1.5rem;
  }

  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    background: #bfc8ad;
    padding: 0.5rem 2rem 0.5rem 2rem;
    width: fit-content;
    border: 1px solid #bfc8ad;
  }

  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
