import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Mulish, sans-serif",
  },
  palette: {
    primary: {
      light: "#E6EFFB",
      main: "#122F7F",
      contrastText: "#DDE2FF",
    },
    secondary: {
      main: "#E6EFFB",
      contrastText: "#fff",
    },
    text: {
      primary: "#3F3F3F",
      secondary: "#252733",
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
