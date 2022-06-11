import React from "react";
import styled from "styled-components";

import GlobalStyle from "@styles/global-style";
import Navbar from "./navbar";
import Footer from "./footer";
import { device } from "@constants/device";

const Main = styled.main`
  padding: 2rem 1.25rem;
  min-height: calc(100vh - 9rem);

  @media ${device.tablet} {
    padding: 3rem 1.25rem;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
