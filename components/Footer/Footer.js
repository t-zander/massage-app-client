import { Box, Container, IconButton, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";
import TelegramIcon from "@material-ui/icons/Telegram";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import InstagramIcon from "../icons/Instagram";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 0),
    background: "rgba(36, 33, 50, 0.7)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  telegramIcon: {
    "&:hover": {
      fill: "#20A0E1"
    }
  },
  facebookIcon: {
    "&:hover": {
      fill: "#157DC3"
    }
  },
  phone: {
    textDecoration: "none",
    cursor: "pointer",
    transition: "color .4s",
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1)
  },
  icon: {
    transition: "0.5s",
    cursor: "pointer"
  }
}));

const Footer = props => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container className={classes.container} maxWidth="md">
        <Box display="flex" alignItems="center">
          {/* <PhoneIcon style={{ marginRight: 20 }} /> */}
          <Typography
            variant="h6"
            style={{ marginRight: 20 }}
            className={classes.phone}
            href="tel:097-000-000-00"
          >
            097-000-000-00
          </Typography>
          <Typography
            variant="h6"
            className={classes.phone}
            href="tel:097-000-000-00"
          >
            095-000-000-00
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton href="https://t.me/t_Zander" color="inherit">
            <TelegramIcon
              className={clsx(classes.icon, classes.telegramIcon)}
            />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/khomutets/"
            color="inherit"
          >
            <FacebookIcon
              className={clsx(classes.icon, classes.facebookIcon)}
            />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/massage_zp_vyacheslav"
            color="inherit"
          >
            <InstagramIcon className={classes.icon} />
          </IconButton>
        </Box>
      </Container>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
