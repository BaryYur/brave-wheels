import { Router } from "./router";

import { useTheme } from "./hooks";

import { Header, Footer } from "./components";

import { ThemeProvider } from "styled-components";

import * as Elements from "./components/wrappers/Elements";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Elements.MainWrapper>
        <Header />
        <Router />
        <Footer />
      </Elements.MainWrapper>
    </ThemeProvider>
  );
};

export default App;
