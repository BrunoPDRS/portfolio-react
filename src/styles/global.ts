import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background-color: #e5e5e5;
    box-shadow: inset 12px 1px 8px 1px black;
    height: 100vh;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .App {
    display: flex;
  }

  main {
    margin-left: 100px;
  }
`;
