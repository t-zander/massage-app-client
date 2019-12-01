import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import FacebookIcon from "./FacebookIcon";
import { IconButton, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 0),
    background: "rgba(36, 33, 50, 0.7)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  contacts: {
    display: "flex",
    width: "40%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    "& p": {
      margin: 0
    }
  }
}));

const Footer = props => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.contacts}>
        <p>095-000-000-00</p>
        <p>097-000-000-00</p>
        <img src="gmail.svg" alt="" style={{ fill: "red" }} />
        <img src="telegram.svg" alt="" />
        <img src="facebook.svg" />
      </div>
      <Box color="text.secondary">&copy; All rights reserved</Box>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
