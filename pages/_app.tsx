import { AppProps } from "next/app";
import "../src/styles/_setup.css";
import theme from "../src/styles/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <Head>
        <title>SPCA Clubs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <style>
        {`
          body {
            color: ${theme.palette.text.primary};
            font-family: ${theme.typography.fontFamily};
            background-color: ${theme.palette.background.default};
          }

        `}
      </style>
    </MuiThemeProvider>
  );
}

export default MyApp;
