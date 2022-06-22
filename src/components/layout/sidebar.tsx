import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { device } from "@constants/device";
import { headerNav } from "@constants/header-nav";
import { themeMode } from "@hooks/useTheme";
import ThemeSwitch from "./theme-switch";

const StyledSidebar = styled.div<{ $show: boolean }>`
  background-color: ${({ theme }) => theme.background3};
  position: fixed;
  top: 0;
  right: 0px;
  width: 100%;
  height: 100%;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  z-index: 2;
  opacity: ${(props) => (props.$show ? "1" : "0")};
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  font-size: 1rem;
  font-weight: 400;

  @media ${device.tablet} {
    display: none;
  }
`;

const StyledUl = styled.ul`
  margin: 5rem 2rem 0 2rem;
`;

const StyledLi = styled.li`
  margin: 0.7rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const StyledLink = styled(Link)`
  display: flex;
  padding-bottom: 0.7rem;
`;

type SidebarProps = {
  show: boolean;
  theme: themeMode;
  themeToggler: () => void;
};

const Sidebar = ({ show, theme, themeToggler }: SidebarProps) => {
  return (
    <StyledSidebar $show={show}>
      <StyledUl>
        {headerNav.map((item) => (
          <StyledLi key={item.label}>
            <StyledLink to={item.link} activeClassName="active">
              {item.label}
            </StyledLink>
          </StyledLi>
        ))}
        {/* <ThemeSwitch themeToggler={themeToggler} theme={theme} /> */}
      </StyledUl>
    </StyledSidebar>
  );
};

export default Sidebar;
