import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 2rem;
  max-width: 25rem;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 1.5rem;
    margin-top: 3rem;
    justify-content: flex-start;
  }

  p:last-child {
    margin-top: 4rem;
    text-align: center;
  }

  .passwordReqs {
    font-size: 0.8rem;
  }
`;

export const StyledForm = styled.form`
  padding: 1rem;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 5%);

  > * {
    margin-top: 1.8rem;
  }

  input {
    line-height: 1.5rem;
  }

  button {
    margin-top: 2rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background: #bfc8ad;
    padding: 0.5rem 2rem 0.5rem 2rem;
    width: fit-content;
    border: 1px solid #bfc8ad;
    font-family: Prata;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.32));
  }

  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

