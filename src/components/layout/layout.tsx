import React from "react";
import styled from "styled-components";

import GlobalStyle from "@styles/global-style";
import Navbar from "./navbar";
import Footer from "./footer";

const Main = styled.main`
  padding: 3rem 0;
  min-height: calc(100vh - 9rem);
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
}
