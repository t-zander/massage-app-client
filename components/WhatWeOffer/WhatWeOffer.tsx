import React from "react";
import { Box, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    padding: theme.spacing(6, 4)
  }
}));

const offers = [
  "насладиться расслабляющим массажем",
  "получить помощь в выборе нужного типа массажа",
  "записаться на пробное посещение",
  "посещать сеанс в масажном кабинете или не выходя из дома"
];

const WhatWeOffer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        С нами вы сможете
      </Typography>
      <Box width="fit-content" margin="0 auto">
        {offers.map((offer, index) => (
          <Box key={index} display="flex" marginY={1}>
            <img
              src="/img/check.svg"
              alt="check mark"
              style={{ marginRight: "10px", width: 20 }}
            />
            <Typography
              key={index}
              variant="body2"
              align="left"
              color="primary"
            >
              {offer}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhatWeOffer;
