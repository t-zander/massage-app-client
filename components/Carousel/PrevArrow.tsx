import { CustomArrowProps } from "react-slick";
import { IconButton } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "block",
    position: "absolute",
    left: 10,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
  },
}));

const PrevArrow = ({ onClick, style }: CustomArrowProps) => {
  const classes = useStyles();

  return (
    <IconButton
      onClick={onClick}
      style={style}
      className={classes.root}
      size="small"
    >
      <ChevronLeft fontSize="large" />
    </IconButton>
  );
};

export default PrevArrow;
