import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { useThemeReturnType } from "@hooks/useTheme";
import styled from "styled-components";

const StyledSwitch = styled.div`
  cursor: pointer;
`;
type ThemeSwitchProps = useThemeReturnType;

const ThemeSwitch = ({ theme, themeToggler }: ThemeSwitchProps) => {
  return (
    <StyledSwitch>
      {theme === "light" ? (
        <FiMoon size="1rem" onClick={themeToggler} />
      ) : (
        <FiSun size="1rem" onClick={themeToggler} />
      )}
    </StyledSwitch>
  );
};

export default ThemeSwitch;
