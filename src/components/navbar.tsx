import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { device } from "../constants/device";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    font-size: 18px;
  }
  a.active {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>Christina Yun</h1>
      </Link>
      <StyledNav>
        <Link to="/" activeClassName="active">
          projects
        </Link>
        <Link to="/posts" activeClassName="active">
          posts
        </Link>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
