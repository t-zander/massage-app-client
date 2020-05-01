import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout/Layout";

const useStyles = makeStyles(() => ({
  aboutMeImg: {
    maxWidth: "100%"
  }
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Layout backgroundUrl="/img/background-checkin.png">
      <Typography variant="h4" align="center" gutterBottom>
        Почему я?
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={4}>
          <img src="/img/about_me.png" className={classes.aboutMeImg} />
        </Grid>
      </Grid>
    </Layout>
  );
};

AboutUs.propTypes = {};

export default AboutUs;
