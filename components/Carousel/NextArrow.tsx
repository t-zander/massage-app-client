import { CustomArrowProps } from "react-slick";
import { IconButton } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "block",
    position: "absolute",
    right: 10,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
  },
}));

const NextArrow = ({ onClick, style }: CustomArrowProps) => {
  const classes = useStyles();

  return (
    <IconButton
      onClick={onClick}
      style={style}
      className={classes.root}
      size="small"
    >
      <ChevronRight fontSize="large" />
    </IconButton>
  );
};

export default NextArrow;
