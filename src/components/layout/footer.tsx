import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { footerNav, socialLinks } from "@constants/footer-nav";
import { device } from "@constants/device";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1.25rem;
  padding: 1rem 0;
  border-top: 1px solid var(--slate-500);
  text-align: center;
  flex-direction: column-reverse;

  @media ${device.tabletS} {
    text-align: left;
    flex-direction: row;
  }
`;

const StyledCopyright = styled.p`
  font-size: 0.8rem;
  margin-top: 1rem;

  @media ${device.tabletS} {
    margin-top: 0;
  }
`;

const StyledFooterUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledFooterLi = styled.li`
  font-size: 1.5rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledCopyright>
        Copyright ©{currentYear} Christina Yun. All rights reserved.
      </StyledCopyright>
      <nav>
        <StyledFooterUl>
          {socialLinks.map((item, index) => (
            <StyledFooterLi key={index}>
              <a href={item.link} target="_blank">
                {item.label}
              </a>
            </StyledFooterLi>
          ))}
        </StyledFooterUl>
      </nav>
    </StyledFooter>
  );
};

export default Footer;
