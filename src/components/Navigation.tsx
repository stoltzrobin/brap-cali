import React from "react";
import styled from "@emotion/styled";
import { colors, fontColors } from "./colors";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
  background-color: ${colors.primary};
  color: ${fontColors.primary};
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
`;

export const Navigation = () => (
  <NavWrapper>
    <NavItem to="/">Home</NavItem>
    <NavItem to="/logger/">Logger</NavItem>
    <NavItem to="/table/">Table</NavItem>
  </NavWrapper>
);
