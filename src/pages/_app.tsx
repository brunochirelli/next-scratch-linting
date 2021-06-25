import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme } from "../themes/themes";

import "../styles/normalize.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
