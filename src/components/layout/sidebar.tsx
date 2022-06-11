import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { device } from "@constants/device";
import { headerNav } from "@constants/header-nav";

const StyledSidebar = styled.div<{ $show: boolean }>`
  background-color: var(--slate-800);
  position: fixed;
  top: 0;
  right: 0px;
  width: 100%;
  height: 100%;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  z-index: 0;
  opacity: ${(props) => (props.$show ? "1" : "0")};
  display: flex;
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;

  @media ${device.tablet} {
    display: none;
  }
`;

const StyledLi = styled.li`
  margin: 1rem 0;
`;

type SidebarProps = {
  show: boolean;
};

const Sidebar = ({ show }: SidebarProps) => {
  return (
    <StyledSidebar $show={show}>
      <ul>
        {headerNav.map((item) => (
          <StyledLi key={item.label}>
            <Link to={item.link} activeClassName="active">
              {item.label}
            </Link>
          </StyledLi>
        ))}
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
