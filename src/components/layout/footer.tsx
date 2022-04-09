import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { footerNav } from "@constants/footer-nav";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p,
  a {
    font-size: 0.75rem;
  }
`;

const StyledFooterUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledFooterLi = styled.li`
  display: inherit;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <p>Copyright ©{currentYear} Christina Yun</p>
      <nav>
        <StyledFooterUl>
          {footerNav.map((item) => (
            <StyledFooterLi key={item.label}>
              <Link to={item.link} activeClassName="active">
                {item.label}
              </Link>
            </StyledFooterLi>
          ))}
        </StyledFooterUl>
      </nav>
    </StyledFooter>
  );
};

export default Footer;
