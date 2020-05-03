import React, { FC } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
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

interface StepIconProps {
  active: boolean;
  completed: boolean;
}

const StepIcon: FC<StepIconProps> = ({ active, completed }) => {
  const classes = useStyles();

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

export default StepIcon;
