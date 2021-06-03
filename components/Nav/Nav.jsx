import Link from "next/link";
import Burger from "../Burger/burger";
import Menu from "../Menu/menu.jsx";
import styled from "styled-components";

const StyledMenu = styled.div`
  position: relative;
  background: hotpink;
  height: fit-content;
`;
const StyledLink = styled.h1`
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  text-decoration: underline;
  padding: 1rem;
`;

export default function Nav({ open, setOpen }) {
  return (
    <StyledMenu>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <StyledLink>
        <Link href="/">
          <a className="navTitle">UK TRAVEL GUIDE</a>
        </Link>
      </StyledLink>
      <div className="underline"></div>
    </StyledMenu>
  );
}
