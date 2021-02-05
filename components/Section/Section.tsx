import React, { FC } from "react";
import { Box, BoxProps, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(6, 4),
  },
}));

const Section: FC<BoxProps> = ({ children, className, ...props }) => {
  const classes = useStyles();

  return (
    <Box
      component="section"
      className={clsx(classes.root, className)}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Section;
