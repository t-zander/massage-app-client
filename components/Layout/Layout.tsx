import { Drawer, IconButton, Theme, Box } from "@material-ui/core";
import CloseMenuIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import React, { FC, ReactElement, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NavbarLink from "../Navbar/NavbarLink/NavbarLink";

const useStyles = makeStyles((theme: Theme) => ({
  closeIcon: {
    alignSelf: "flex-end"
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  navbarContent: {
    // padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column"
  }
}));

interface LayoutProps {
  children: ReactElement | ReactElement[];
  backgroundUrl?: string;
}

const Layout: FC<LayoutProps> = ({ children, backgroundUrl }) => {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const onCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      {/*<Drawer variant="temporary" open={isDrawerOpen} onClose={onCloseDrawer}>
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
      <Navbar onOpenDrawer={onOpenDrawer} />*/}

      <Box className={classes.content}>{children}</Box>
      <Footer />
    </div>
  );
};

export default Layout;
