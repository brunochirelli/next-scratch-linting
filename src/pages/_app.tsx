import { ThemeProvider } from "styled-components";
import { theme } from "../themes/themes";

import "../static/styles/normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
