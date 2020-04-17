import React from "react";
import PropTypes from "prop-types";
import { Link } from "@material-ui/core";
import NextLink from "next/link";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    transition: "color .4s",
    color: theme.palette.primary.contrastText,
    textTransform: "uppercase",
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.primary.main,
      textDecoration: "none"
    }
  }
}));

const NavbarLink = ({ href, children }) => {
  const classes = useStyles();

  return (
    <NextLink href={href}>
      <Link className={classes.root}>{children}</Link>
    </NextLink>
  );
};

NavbarLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default NavbarLink;
