import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { device } from "../../constants/device";
import { navList } from "../../css/shared-style";

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
