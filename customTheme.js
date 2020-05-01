import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#B5435A",
      dark: "#974A5E"
    },
    secondary: {
      main: "#242132",
      contrastText: "#ffffff"
    },
    text: {
      primary: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: ["'Source Serif Pro', serif"].join(","),
    fontSize: 16
  },
  overrides: {
    MuiTypography: {},
    MuiDialogTitle: {
      root: {
        color: "#000"
      }
    },
    MuiDrawer: {
      paper: {
        background: "#242132",
        minWidth: 300
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: "#ffffff"
      }
    }
  }
});
