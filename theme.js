import { createMuiTheme } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#B5435A",
      dark: "#974A5E"
    },
    secondary: {
      main: "#242132"
    },
    text: {
      primary: "#FFFFFF",
      secondary: fade("#FFFFFF", 0.4)
    }
  },
  typography: {
    fontFamily: ["'Source Serif Pro', serif"].join(","),
    fontSize: 16,
    h1: {
      fontFamily: "'Dancing Script', cursive"
    },
    h2: {
      fontFamily: ["'Dancing Script', cursive", "'Marck Script', cursive"].join(
        ","
      )
    },
    h3: {
      fontFamily: ["'Dancing Script', cursive", "'Marck Script', cursive"].join(
        ","
      )
    },
    h4: {
      fontFamily: ["Dancing Script", "Marck Script"].join(",")
    },
    h5: {
      fontFamily: ["'Dancing Script', cursive", "'Marck Script', cursive"].join(
        ","
      )
    },
    h6: {
      fontFamily: ["'Dancing Script', cursive", "'Marck Script', cursive"].join(
        ","
      )
    }
  }
});
