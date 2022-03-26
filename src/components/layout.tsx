import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./footer";
import Navbar from "./navbar";

const GlobalStyle = createGlobalStyle`
  :root {
    --accent: rgb(37 99 235);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Red Hat Mono', monospace;
    max-width: 48rem;
    margin: auto;
    padding: 3rem 1rem;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  h1 {
    letter-spacing: 0.075rem;
  }

  nav {
    letter-spacing: 0.05rem;
  }

  ul {
    list-style: none;
  }

  p {
    line-height: 1.5;
    color: #666;
  }

  .accent {
    color: var(--accent);
  }
`;

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
      <Footer />
    </React.Fragment>
  );
}
