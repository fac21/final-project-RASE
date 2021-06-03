import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">England</a>
      <a href="/">Scotland</a>
      <a href="/">Wales</a>
      <a href="/">N. Ireland</a>
      <a href="/">Sign Up</a>
      <a href="/">Log In</a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
