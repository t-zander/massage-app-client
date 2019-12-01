import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.grey[100],
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: theme.palette.primary.light
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: theme.palette.grey[100]
  },
  completed: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.light
  }
}));

const StepIcon = props => {
  const classes = useStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      <div className={completed ? classes.completed : classes.circle} />
    </div>
  );
};

StepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool
};

export default StepIcon;
