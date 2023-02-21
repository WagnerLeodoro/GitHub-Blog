import { ThemeProvider } from "styled-components";
import { Blog } from "./pages/Blog";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Blog />
    </ThemeProvider>
  );
}
