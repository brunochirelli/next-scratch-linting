import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themes/themes";
import { useDarkMode } from "../themes/useDarkMode";

import "../static/styles/normalize.css";

function MyApp({ Component, pageProps }) {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
