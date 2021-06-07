import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">England</a>
      <a href="/">Scotland</a>
      <a href="/">Wales</a>
      <a href="/">N. Ireland</a>
      <a href="/signup">Sign Up</a>
      <a href="/login">Log In</a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
