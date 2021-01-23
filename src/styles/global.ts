import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
  }

  html, body {
    background: #5679A6;

    font-size: 62.5%;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
  }

  button {
    cursor: pointer;
  }
`;
