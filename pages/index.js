import React from "react";
import { withApollo } from "../lib/apollo";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Typography, Box, Divider, Icon } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import { makeStyles } from "@material-ui/styles";
import PriceIcon from "@material-ui/icons/AttachMoney";
import Healing from "@material-ui/icons/Healing";
import clsx from "clsx";
/* import PriceIcon from "@material-ui/icons/AttachMoney";
 */
const GET_COMMENTS = gql`
  {
    comments {
      author
      content
    }
  }
`;

const useStyles = makeStyles(theme => ({
  /* content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }, */
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
    color: theme.palette.text.primary,
    marginRight: 8
  }
}));

const Home = () => {
  const classes = useStyles();
  const { data, loading, error } = useQuery(GET_COMMENTS);

  console.log({ data, loading, error });
  return (
    <Layout backgroundUrl="/img/background.png">
      <Box className={classes.banner} textAlign="center">
        <Typography variant="h4" component="h4" className={classes.titleMain}>
          Good hands massage
        </Typography>
        <Typography variant="body1">Ваша молодость в наших руках!</Typography>
      </Box>
      <Box className={classes.results}>
        <Typography variant="body1" align="center">
          <Icon
            className={clsx(classes.icon, "fa fa-hand-holding-usd")}
            color="error"
          />{" "}
          Демократичные цены
        </Typography>
        <Typography variant="body1">
          <Icon className={clsx(classes.icon, "fa fa-child")} color="error" />{" "}
          Улучшение самочуствия
        </Typography>
        <Typography variant="body1">
          <Icon
            className={clsx(classes.icon, "fa fa-smile-wink")}
            color="error"
          />{" "}
          Уютная атмосфера
        </Typography>
      </Box>
    </Layout>
  );
};

export default withApollo(Home);
