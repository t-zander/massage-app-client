import { StepConnector, Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const Connector = withStyles((theme: Theme) => ({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  active: {
    "& $line": {
      borderColor: theme.palette.primary.light
    }
  },
  completed: {
    "& $line": {
      borderColor: theme.palette.primary.light
    }
  },
  line: {
    borderColor: theme.palette.grey[100],
    borderTopWidth: 3,
    borderRadius: 1
  }
}))(StepConnector);

export default Connector;
