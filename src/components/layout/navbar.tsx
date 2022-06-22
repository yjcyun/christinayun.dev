import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { FiMenu, FiX } from "react-icons/fi";

import { device } from "@constants/device";
import { headerNav } from "@constants/header-nav";
import { useThemeReturnType } from "@hooks/useTheme";

import Sidebar from "./sidebar";
import ThemeSwitch from "./theme-switch";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 1.5rem 0 1rem;
  margin: 0 1.25rem;

  @media ${device.tablet} {
    padding: 3.5rem 0 1rem;
  }
`;

const StyledInnerHeader = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

const StyledHome = styled.div`
  font-size: 1.35rem;
  font-family: var(--logoFF);
  margin-right: 1rem;
`;

const StyledIcons = css`
  font-size: 1.4rem;
  cursor: pointer;
  z-index: 3;

  @media ${device.tablet} {
    display: none;
  }
`;

const StyledFiMenu = styled(FiMenu)<{ $show: boolean }>`
  ${StyledIcons}
  display: ${(props) => (props.$show ? "none" : "flex")};
`;

const StyledFiX = styled(FiX)<{ $show: boolean }>`
  ${StyledIcons}
  display: ${(props) => (props.$show ? "flex" : "none")};
`;

const StyledNav = styled.nav`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

const StyledNavList = styled.ul`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 1rem;

    &.active {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

type NavbarProps = useThemeReturnType;

const Navbar = ({ theme, themeToggler }: NavbarProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const onShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSidebar]);

  return (
    <StyledHeader>
      <StyledInnerHeader>
        <Link to="/">
          <StyledHome>CYY</StyledHome>
        </Link>

        <StyledFiMenu
          role="button"
          onClick={onShowSidebar}
          $show={showSidebar}
        />
        <StyledFiX role="button" onClick={onShowSidebar} $show={showSidebar} />
        <Sidebar show={showSidebar} themeToggler={themeToggler} theme={theme} />

        <StyledNav>
          <StyledNavList>
            {headerNav.map((item) => (
              <li key={item.label}>
                <Link to={item.link} activeClassName="active">
                  {item.label}
                </Link>
              </li>
            ))}
          </StyledNavList>
        </StyledNav>
      </StyledInnerHeader>

      {/* <ThemeSwitchContainer>
        <ThemeSwitch themeToggler={themeToggler} theme={theme} />
      </ThemeSwitchContainer> */}
    </StyledHeader>
  );
};

export default Navbar;
const ThemeSwitchContainer = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;
