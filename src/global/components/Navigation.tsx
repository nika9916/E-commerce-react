import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export function Navigation() {
  return (
    <nav>
      <Navbar>
        <Nav>
          <NavLink to="/">Home</NavLink>
        </Nav>
        <Nav>
          <NavLink to="/about">About</NavLink>
        </Nav>
        <Nav>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
        <Nav>
          <NavLink to="/products">Products</NavLink>
        </Nav>
      </Navbar>
    </nav>
  );
}

const Navbar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
`;
const Nav = styled.ul`
  list-style: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 500;
  padding: 0 10px;
  opacity: 0.8;
  &:hover {
    color: #030060;
    text-decoration: underline;
    opacity: 1;
  }
  &.active {
    color: #030060;
    text-decoration: underline;
    opacity: 1;
  }
`;
