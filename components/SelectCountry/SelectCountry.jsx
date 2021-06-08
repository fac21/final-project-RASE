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
      <Link href="/countries/england">
        <a>England</a>
      </Link>
      <Link href="/countries/wales">
        <a>Wales</a>
      </Link>
      <Link href="/countries/scotland">
        <a>Scotland</a>
      </Link>
      <Link href="/countries/northern_ireland">
        <a>N. Ireland</a>
      </Link>
    </StyledDiv>
  );
}
