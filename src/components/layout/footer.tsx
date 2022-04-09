import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { navList } from "@styles/shared-style";

const StyledFooterUl = styled.ul`
  ${navList};
  justify-content: center;
  font-size: 1.15rem;
`;

const Footer = () => {
  const footerNav = [
    { label: "about", link: "/about" },
    { label: "resume", link: "/resume" },
    { label: "log", link: "/log" },
  ];

  return (
    <footer>
      <nav>
        <StyledFooterUl>
          {footerNav.map((item) => (
            <li key={item.label}>
              <Link to={item.link} activeClassName="active">
                {item.label}
              </Link>
            </li>
          ))}
        </StyledFooterUl>
      </nav>
    </footer>
  );
};

export default Footer;
