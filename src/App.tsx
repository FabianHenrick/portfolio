import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/global";
import { defaultTheme } from "./Styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Components/Header/router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
