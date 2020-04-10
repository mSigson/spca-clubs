import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      light: "#E6EFFB",
      main: "#303f9f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#19857b",
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
