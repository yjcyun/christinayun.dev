import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { device } from "@constants/device";
import { headerNav } from "@constants/header-nav";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const StyledHome = styled.div`
  font-size: 1.35rem;
`;

const StyledNavList = styled.ul`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 1.15rem;

    &.active {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledHome>Christina Yun</StyledHome>
      </Link>
      <nav>
        <StyledNavList>
          {headerNav.map((item) => (
            <li key={item.label}>
              <Link to={item.link} activeClassName="active">
                {item.label}
              </Link>
            </li>
          ))}
        </StyledNavList>
      </nav>
    </StyledHeader>
  );
};

export default Navbar;
