import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-blue: #202733;
    --dark-grayish-blue: #313A48;
    --light-cyan: #CEE3E9;
    --neon-green: #2cb67d;
    --primary: #7f5af0;
    --secondary: #2cb67d;
    --accent-1: #322460;
    --accent-2: #d8cdfa;
    --background: #16161a;
    --white-1: #ffffff;
    --white-2: #fffffe;
    --black-1: #000000;
    --black-2: #242629;
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
    max-width: 1280px;
    margin: auto;
    padding: 3rem 1rem;
    color: var(--white-2);
    background: var(--background);
  }

  a {
    text-decoration: none;
    color: var(--light-cyan);

    &.active, &.link {
      text-decoration: underline;
    }
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
