import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./menu.styled";
import Link from "next/link";

const Menu = ({ open }) => {
  return (
    <StyledMenu id={"menu"} open={open}>
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
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
      <Link href="/login">
        <a>Log In</a>
      </Link>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
