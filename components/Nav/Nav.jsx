import Link from "next/link";
import Burger from "../Burger/burger";
import Menu from "../Menu/menu.jsx";
import { StyledMenu, StyledLink } from "./Nav.styled.jsx"

export default function Nav({ open, setOpen, logged }) {
  return (
    <StyledMenu>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} logged={logged} />
      </div>
      <StyledLink>
        <Link href="/">
          <a className="navTitle">UK TRAVEL SWAP</a>
        </Link>
      </StyledLink>
      <div className="underline"></div>
    </StyledMenu>
  );
}
