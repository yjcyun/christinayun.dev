import React from "react";
import styled from "styled-components";
import { FiMoon, FiSun } from "react-icons/fi";

import { useThemeReturnType } from "@hooks/useTheme";

const StyledSwitch = styled.div`
  cursor: pointer;
  display: inline;
`;

type ThemeSwitchProps = useThemeReturnType;

const ThemeSwitch = ({ theme, themeToggler }: ThemeSwitchProps) => {
  return (
    <StyledSwitch>
      {theme === "light" ? (
        <FiMoon size="1.2rem" onClick={themeToggler} />
      ) : (
        <FiSun size="1.2rem" onClick={themeToggler} />
      )}
    </StyledSwitch>
  );
};

export default ThemeSwitch;
