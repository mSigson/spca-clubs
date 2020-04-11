import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      light: "#E6EFFB",
      main: "#00337f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f2c029",
      contrastText: "#fff",
    },
    text: {
      primary: "#646464",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f1f2f5",
    },
  },
  overrides: {
    topBarHeight: "72px",
  },
});

export default theme;
