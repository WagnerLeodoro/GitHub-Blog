import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["blue"]}
  }

  body {
    background-color: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
    line-height: 160%;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
    line-height: 160%;

    a {
    color: inherit;
    text-decoration: none;
  }
  }
`;
