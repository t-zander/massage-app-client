import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  dots: {
    position: "inherit",
    "& li.slick-active button::before": {
      color: theme.palette.primary.main,
    },
    "& li": {
      "& button::before": {
        fontSize: theme.typography.pxToRem(12),
        color: "#fff",
        opacity: 0.5,
      },
    },
  },
}));

const useCarouselStyles = () => {
  const classes = useStyles();

  return {
    dotsClass: `slick-dots ${classes.dots}`,
  };
};

export default useCarouselStyles;
