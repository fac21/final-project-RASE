import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./menu.styled";
import Link from "next/link";

const Menu = ({ open }) => {
  return (
    <StyledMenu id={"menu"} open={open}>
      <a href="/signup">Sign Up</a>
      <a href="/login">Log In</a>
      <a href="/add">Add Itinerary</a>
      <a href="/profile">My Profile</a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
