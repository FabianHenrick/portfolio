import { Header } from "./Components/Header/header";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/global";
import { defaultTheme } from "./Styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        <Header />
        <h1> meu portfolio </h1>
      </div>
    </ThemeProvider>
  );
}
