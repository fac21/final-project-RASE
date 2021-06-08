import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-decoration: underline;
  padding: 1rem;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
`;

export default function SelectCountry() {
  return (
    <StyledDiv>
      <Link href="/itineraries">
        <a>England</a>
      </Link>
      <Link href="/itineraries">
        <a>Wales</a>
      </Link>
      <Link href="/itineraries">
        <a>Scotland</a>
      </Link>
      <Link href="/itineraries">
        <a>N. Ireland</a>
      </Link>
    </StyledDiv>
  );
}
