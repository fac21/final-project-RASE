import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./menu.styled";
import Link from "next/link";

const Menu = ({ open, setOpen, logged }) => {
  return (
    <StyledMenu id={"menu"} open={open} onClick={() => setOpen(!open)}>  
      {!logged ? <><Link href="/login">
        <a>Log In</a>
      </Link> <Link href="/signup">
        <a>Sign Up</a>
      </Link> </>: <Link href="/logout">
        <a>Log Out</a>
      </Link>}
      <Link href="/addItinerary">
        <a>Add Itinerary</a>
      </Link>
      <Link href="/profile">
        <a>My Profile</a>
      </Link>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
