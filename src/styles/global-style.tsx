import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-blue: #202733;
    --dark-grayish-blue: #313A48;
    --light-cyan: #CEE3E9;
    --neon-green: #53FFAA;
    --border: 1px solid var(--dark-grayish-blue);
    --bodyFF:  'Spartan', sans-serif;
    --headingFF: 'Oxygen Mono', monospace;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--bodyFF);
    max-width: 48rem;
    margin: auto;
    padding: 3rem 1rem;
    color: var(--light-cyan);
    background: var(--dark-blue);
  }

  a {
    text-decoration: none;
    color: var(--light-cyan);
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
    color: var(--light-cyan);
  }

  .accent {
    color: var(--neon-green);
  }
`;

export default GlobalStyle;
