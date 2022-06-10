import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { device } from "@constants/device";
import { headerNav } from "@constants/header-nav";

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid #737373;
  padding-bottom: 1rem;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const StyledHome = styled.div`
  font-size: 1.35rem;
  font-family: var(--logoFF);
  margin-right: 1rem;
`;

const StyledNavList = styled.ul`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 1rem;
    text-transform: uppercase;

    &.active {
      color: var(--accent);
    }
  }
`;

const Navbar = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledHome>CYY</StyledHome>
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
