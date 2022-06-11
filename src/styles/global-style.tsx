import { device } from "@constants/device";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --slate-000: #080b13;
    --slate-900: #0C111C;
    --slate-800:#111827;
    --slate-700: #334155;
    --slate-600: #475569;
    --slate-500: #64748b;
    --slate-400: #94a3b8;
    --slate-300: #cbd5e1;
    --slate-200: #e2e8f0;
    --slate-100: #f1f5f9;
    --accent: #78D5CA;
    --box-shadow: 0px 1px 10px -2px var(--slate-800);
    --lg-width:1280px;
    --md-width: 860px;
    --border: 1px solid var(--dark-grayish-blue);
    --logoFF: 'Plaster', cursive;
    --bodyFF:  'Poppins', sans-serif;
    --headingFF: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--bodyFF);
    max-width: var(--lg-width);
    margin: auto;
    color: var(--slate-100);
    background: var(--slate-900);
  }

  a {
    text-decoration: none;
    color: var(--slate-100);
  }

  h1 {
    letter-spacing: 0.075rem;
    font-family: var(--headingFF)
  }

  nav {
    letter-spacing: 0.05rem;
  }

  ul {
    list-style: none;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  button {
    font-family: var(--bodyFF);
    cursor: pointer;
  }

  .accent {
    color: var(--neon-green);
  }
`;

export default GlobalStyle;
