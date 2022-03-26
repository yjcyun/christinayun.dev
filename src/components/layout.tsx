import React from "react";
import { createGlobalStyle } from "styled-components";
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

  p {
    line-height: 1.5;
    color: #666;
  }

  .accent {
    color: var(--accent);
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
    </React.Fragment>
  );
}
