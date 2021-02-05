import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FF7E99",
      dark: "#D9516E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#5D567B",
      dark: "#3E3955",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Roboto", "serif"].join(","),
    fontSize: 16,
  },
  overrides: {
    MuiTypography: {},
    MuiDialog: {
      container: {
        backgroundColor: "rgba(0, 0, 0, 0.35)",
      },
      paper: {
        background: `linear-gradient(315deg, #39344F 0%, #5D567B 100%)`,
      },
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
    },
    MuiDialogTitle: {
      root: {},
    },
    MuiDrawer: {
      paper: {
        /*background: "#242132",*/
        minWidth: 300,
      },
    },
    MuiDivider: {
      root: {
        /*backgroundColor: "#ffffff"*/
      },
    },
    MuiCard: {
      root: {
        background: "#726AA0",
        boxShadow: "6px 10px 14px #242132",
      },
    },
  },
});
