import { Container, Hidden, IconButton, Theme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";
import NavbarLink from "./NavbarLink/NavbarLink";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    padding: theme.spacing(2, 0),
    position: "relative"
  },
  logo: {
    maxWidth: 50
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1)
  },
  menuButton: {
    position: "absolute"
  }
}));

interface NavBarProps {
  onOpenDrawer: () => void;
}

const Navbar: FC<NavBarProps> = ({ onOpenDrawer }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Hidden mdUp implementation="css">
        <IconButton
          color="inherit"
          className={classes.menuButton}
          onClick={onOpenDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>

      <Hidden smDown implementation="css">
        <Container className={classes.container} maxWidth="md">
          <NavbarLink href="/">
            <img
              alt="logo"
              src="/img/logo_223x223.png"
              className={classes.logo}
            />
          </NavbarLink>
          <NavbarLink href="/check-in">Записаться</NavbarLink>
          <NavbarLink href="/about-me">Обо мне</NavbarLink>
          <NavbarLink href="/feedback">Отзывы</NavbarLink>
        </Container>
      </Hidden>
    </header>
  );
};

export default Navbar;
