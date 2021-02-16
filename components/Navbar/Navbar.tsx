import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  Theme
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import NavbarLink from './NavbarLink/NavbarLink';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    padding: theme.spacing(2, 0),
    position: 'relative'
  },
  logo: {
    maxWidth: 50
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  menuButton: {
    position: 'absolute'
  },
  navItem: {
    marginRight: theme.spacing(2)
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
        <AppBar color="secondary">
          <Container className={classes.container} maxWidth="md">
            <NavbarLink href="/">
              <img
                alt="logo"
                src="/img/logo_223x223.png"
                className={clsx(classes.navItem, classes.logo)}
              />
            </NavbarLink>

            <NavbarLink href="/appointment" className={classes.navItem}>
              Записаться
            </NavbarLink>
          </Container>
        </AppBar>
      </Hidden>
    </header>
  );
};

export default Navbar;
