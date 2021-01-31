import React, { FC } from "react";
import { Box, Button, Link, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SocialMedia from "../shared/SocialMedia/SocialMedia";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#3b3650",
    background: `url(img/background-home.png)`,
    backgroundBlendMode: "overlay",
  },
  info: {
    width: "40%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
  },
  divider: {
    width: "100%",
    height: "4px",
    background: theme.palette.primary.dark,
  },
  appointmentBtn: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  callNowText: {
    color: theme.palette.primary.main,
    textTransform: "uppercase",
    position: "relative",
    display: "inline-block",
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    "&:after": {
      content: '" "',
      top: "50%",
      width: "100%",
      borderBottom: `solid 1px ${theme.palette.primary.main}`,
      position: "absolute",
      left: "100%",
    },
    "&:before": {
      content: '" "',
      top: "50%",
      width: "100%",
      borderBottom: `solid 1px ${theme.palette.primary.main}`,
      position: "absolute",
      right: "100%",
    },
  },
  phone: {
    fontSize: theme.typography.h6.fontSize,
    color: "#fff",
    transition: ".4s color",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
  },
}));

interface BannerProps {
  onShowAppointmentModal: () => void;
}

const Banner: FC<BannerProps> = ({ onShowAppointmentModal }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} textAlign="center">
      <Box className={classes.info}>
        <Box className={classes.divider} marginY={3} />
        <Typography variant="h4" component="h4" gutterBottom>
          Good hands massage
        </Typography>
        <Typography variant="h4" gutterBottom>
          ваш персональный массажист
        </Typography>

        <Typography>Оставьте ваши данные - и мы вам перезвоним</Typography>
        <Button
          color="inherit"
          variant="outlined"
          className={classes.appointmentBtn}
          onClick={onShowAppointmentModal}
        >
          Записаться
        </Button>

        <Typography className={classes.callNowText} gutterBottom>
          Или позвоните нам прямо сейчас
        </Typography>

        <Link href="tel:095-99-99-999" className={classes.phone}>
          095-99-99-999
        </Link>
        <Box className={classes.divider} marginY={3} />
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default Banner;
