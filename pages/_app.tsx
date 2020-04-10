import { AppProps } from "next/app";
import "../src/styles/_setup.scss";
import theme from "../src/styles/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
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
