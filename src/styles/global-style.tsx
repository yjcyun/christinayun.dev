import { device } from "@constants/device";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --slate-000: #080b13;
    --slate-900: #0C111C;
    --slate-850: #161f32;
    --slate-800:#111827;
    --slate-700: #334155;
    --slate-600: #475569;
    --slate-500: #64748b;
    --slate-400: #94a3b8;
    --slate-300: #cbd5e1;
    --slate-250: #edf2f7;
    --slate-200: #e2e8f0;
    --slate-100: #f1f5f9;
    --sky-000: #f0f9ff;
    --sky-100:#e0f2fe;
    --sky-200:#bae6fd;
    --sky-300:#7dd3fc;
    --sky-400:#38bdf8;
    --sky-500:#0ea5e9;
    --sky-600:#0284c7;
    --sky-700:#0369a1;
    --sky-800:#075985;
    --sky-900:#0c4a6e;
    --accent: #78D5CA;
    --accent-secondary: #0c4a6e;
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
    max-width: var(--md-width);
    margin: auto;
    color: ${({ theme }) => theme.body};
    background: ${({ theme }) => theme.backgroundColor}
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.body};
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
    color: var(--accent);
  }
`;

export default GlobalStyle;
