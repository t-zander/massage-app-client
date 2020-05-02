import React from "react";
import { Box, Icon, Theme, Typography } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { withRedux } from "../lib/redux";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) => ({
  banner: {
    width: "100%",
    borderTop: `4px solid ${theme.palette.primary.dark}`,
    borderBottom: `4px solid ${theme.palette.primary.dark}`,
    padding: theme.spacing(8),
    marginBottom: "10rem"
  },
  titleMain: {
    textTransform: "uppercase",
    marginBottom: theme.spacing(6)
  },
  results: {
    display: "flex",
    justifyContent: "space-between"
  },
  icon: {
    fontSize: 26,
    marginRight: 8
  },
  hoverable: {
    transition: ".4s",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.light
    }
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Layout backgroundUrl="/img/background.png">
      <Box className={classes.banner} textAlign="center">
        <Typography variant="h4" component="h4" className={classes.titleMain}>
          Good hands massage
        </Typography>
        <Typography variant="body1">Ваша молодость в наших руках!</Typography>
      </Box>
      <Box className={classes.results}>
        <Box display="flex" alignItems="baseline" className={classes.hoverable}>
          <Icon className={clsx(classes.icon, "fa fa-hand-holding-usd")} />
          <Typography variant="body1" align="center">
            Демократичные цены
          </Typography>
        </Box>
        <Box display="flex" alignItems="baseline" className={classes.hoverable}>
          <Icon className={clsx(classes.icon, "fa fa-child")} />
          <Typography variant="body1">Улучшение самочуствия</Typography>
        </Box>

        <Box display="flex" alignItems="baseline" className={classes.hoverable}>
          <Icon className={clsx(classes.icon, "fa fa-smile-wink")} />
          <Typography variant="body1">Уютная атмосфера</Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
