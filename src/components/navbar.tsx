import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { device } from "../constants/device";
import { navList } from "./shared-style";

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

const StyledNavList = styled.ul`
  ${navList};
`;

const Navbar = () => {
  const headerNav = [
    { label: "projects", link: "/" },
    { label: "posts", link: "/posts" },
  ];

  return (
    <StyledHeader>
      <Link to="/">
        <h1>Christina Yun</h1>
      </Link>
      <nav>
        <StyledNavList>
          {headerNav.map((item) => (
            <li>
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
