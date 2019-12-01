import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    backgroundPosition: "center center",
    backgroundBlendMode: "overlay",
    background: "#242132",
    display: "flex",
    flexDirection: "column"
  },
  content: {
    padding: "2rem 16%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
}));

const Layout = ({ children, backgroundUrl }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <Navbar />
      <div className={classes.content}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundUrl: PropTypes.string.isRequired
};

export default Layout;
