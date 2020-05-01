import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout/Layout";

const useStyles = makeStyles(theme => ({
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
        <Grid item md={8}>
          <div>
            <Typography variant="h6">Участник шоу "Я зможу"</Typography>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fkhomutets%2Fvideos%2F648926239208263%2F&show_text=false&width=734&appId=546387039529806&height=411"
              width="100%"
              height="500px"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
              allowFullScreen="true"
            />
          </div>
          {/* <div>
            <Typography variant="h6">Участник конкурса по массажу</Typography>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fkhomutets%2Fvideos%2F251613539332828%2F&show_text=false&width=734&appId=546387039529806&height=1311"
              width="auto"
              height="400"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
              allowFullScreen="true"
            />
          </div> */}
        </Grid>
      </Grid>
    </Layout>
  );
};

AboutUs.propTypes = {};

export default AboutUs;
