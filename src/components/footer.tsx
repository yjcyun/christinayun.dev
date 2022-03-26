import { link } from "fs";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { navList } from "./shared-style";

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
            <li>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </StyledFooterUl>
      </nav>
    </footer>
  );
};

export default Footer;
