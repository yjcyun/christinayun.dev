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
    --accent: #78D5CA;
    --accent-secondary: #0c4a6e;
    --box-shadow: 0px 1px 10px -2px var(--slate-800);
    --lg-width:1280px;
    --md-width: 860px;
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
    color: ${({ theme }) => theme.text1};
    background: ${({ theme }) => theme.background1}
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text1};
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
