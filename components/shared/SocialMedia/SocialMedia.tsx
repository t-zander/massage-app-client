import React, { FC } from "react";
import { Box, IconButton, Theme } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import clsx from "clsx";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "../../icons/Instagram";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  telegramIcon: {
    "&:hover": {
      fill: "#039BE5"
    }
  },
  facebookIcon: {
    "&:hover": {
      fill: "#1976D2"
    }
  },
  icon: {
    transition: "0.5s",
    cursor: "pointer"
  }
}));

const SocialMedia: FC = () => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <IconButton href="https://t.me/t_Zander" color="inherit">
        <TelegramIcon className={clsx(classes.icon, classes.telegramIcon)} />
      </IconButton>
      <IconButton href="https://www.facebook.com/khomutets/" color="inherit">
        <FacebookIcon className={clsx(classes.icon, classes.facebookIcon)} />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/massage_zp_vyacheslav"
        color="inherit"
      >
        <InstagramIcon className={classes.icon} />
      </IconButton>
    </Box>
  );
};

export default SocialMedia;
