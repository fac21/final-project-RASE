import Link from "next/link";
import Burger from "../Burger/burger";
import Menu from "../Menu/menu.jsx";
import {StyledMenu, StyledLink} from "./Nav.styled.jsx"

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
