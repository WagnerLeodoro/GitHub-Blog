import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { BlogProvider } from "./contexts/BlogContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <BlogProvider>
          <Header />
          <Router />
        </BlogProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
