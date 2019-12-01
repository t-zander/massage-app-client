import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    transition: "color .4s",
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
}));

const NavbarLink = ({ href, children }) => {
  const classes = useStyles();

  return (
    <Link href={href}>
      <Button href={href} className={classes.root}>
        {children}
      </Button>
    </Link>
  );
};

NavbarLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default NavbarLink;
