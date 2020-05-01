import { Drawer, IconButton, Container } from "@material-ui/core";
import CloseMenuIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NavbarLink from "../Navbar/NavbarLink/NavbarLink";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundBlendMode: "overlay",
    background: "#242132",
    display: "flex",
    flexDirection: "column"
  },
  closeIcon: {
    alignSelf: "flex-end"
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  navbarContent: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column"
  }
}));

const Layout = ({ children, backgroundUrl }) => {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const onCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div
      className={classes.root}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <Drawer variant="temporary" open={isDrawerOpen} onClose={onCloseDrawer}>
        <div className={classes.navbarContent}>
          <IconButton
            color="inherit"
            className={classes.closeIcon}
            onClick={onCloseDrawer}
          >
            <CloseMenuIcon />
          </IconButton>
          <NavbarLink href="/">
            <img alt="logo" src="/img/logo_223x223.png" />
          </NavbarLink>
          <hr style={{ width: "100%" }} />
          <NavbarLink href="/check-in">Записаться</NavbarLink>
          <hr style={{ width: "100%" }} />
          <NavbarLink href="/about-me">Обо мне</NavbarLink>
          <hr style={{ width: "100%" }} />
          <NavbarLink href="/feedback">Отзывы</NavbarLink>
          <hr style={{ width: "100%" }} />
        </div>
      </Drawer>
      <Navbar className={classes.appBar} onOpenDrawer={onOpenDrawer} />

      <Container maxWidth="lg" className={classes.content}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundUrl: PropTypes.string.isRequired
};

export default Layout;
