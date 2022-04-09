import React from "react";
import styled from "styled-components";

import GlobalStyle from "@styles/global-style";
import Navbar from "./navbar";

const Main = styled.main`
  padding: 3rem 0;
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
      {/* <Footer /> */}
    </React.Fragment>
  );
}
