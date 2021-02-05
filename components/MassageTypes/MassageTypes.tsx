import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import { ArrowRight, ChevronLeft, ChevronRight } from "@material-ui/icons";
import Section from "../Section/Section";
import NextArrow from "../Carousel/NextArrow";
import PrevArrow from "../Carousel/PrevArrow";
import useCarouselStyles from "../Carousel/useCarouselStyles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "#454064",
  },
  sliderRoot: {
    width: "80%",
    margin: "0 auto",
    padding: theme.spacing(4, 8),
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 0),
    },
  },
}));

const MassageTypes = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { dotsClass } = useCarouselStyles();

  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 500,
    dotsClass,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Section className={classes.root}>
      <Typography variant="h4" color="primary" align="center">
        Виды массажа
      </Typography>
      <Box py={2}>
        <Slider {...settings} className={classes.sliderRoot}>
          {[0, 1, 2, 3, 4, 5, 6].map((_, index) => {
            return (
              <Box style={{ display: "flex" }} key={index}>
                <Card style={{ maxWidth: 280, margin: "0 auto" }}>
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 160 }}
                      image="img/massage-type.jpg"
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                  <CardContent style={{ minHeight: 200 }}>
                    <Typography gutterBottom variant="h5" component="h5">
                      Массаж спины {index + 1}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Section>
  );
};

export default MassageTypes;
