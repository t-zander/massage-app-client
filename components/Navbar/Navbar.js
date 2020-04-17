import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import NavbarLink from "./NavbarLink/NavbarLink";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    width: "50%",
    alignSelf: "center",
    display: "flex",
    justifyContent: "space-between"
  }
}));

const Navbar = props => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <NavbarLink href="/">Главная</NavbarLink>
      <NavbarLink href="/checkin">Записаться</NavbarLink>
      <NavbarLink href="/aboutus">О нас</NavbarLink>
      <NavbarLink href="/feedback">Отзывы</NavbarLink>
    </header>
  );
};

Navbar.propTypes = {};

export default Navbar;
