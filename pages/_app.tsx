import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import Navbar from "../src/components/Navbar/Navbar";
import "../src/components/Navbar/Navbar.css";

const theme = {
  colors: { primary: "#355C7D" },
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
