import React from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "@styles/global-style";
import { darkTheme, lightTheme } from "@styles/themes";
import Navbar from "./navbar";
import Footer from "./footer";
import { device } from "@constants/device";
import useTheme, { themeMode } from "@hooks/useTheme";

const Main = styled.main`
  padding: 2rem 1.25rem;
  min-height: calc(100vh - 12.2rem);

  @media ${device.tablet} {
    padding: 3rem 1.25rem;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme, themeToggler } = useTheme();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Navbar
        theme={theme as themeMode}
        themeToggler={themeToggler as () => void}
      />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
}
