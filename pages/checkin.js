import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@material-ui/core";
import CheckinStepper from "../components/CheckinStepper/CheckinStepper";
import { withApollo } from "../lib/apollo";

const Checkin = props => {
  return (
    <Layout backgroundUrl="/img/background-checkin.png">
      <Box textAlign="center">
        <Typography variant="h4" component="h4">
          3 простых шага - и вы на пути к здоровью!
        </Typography>
        <CheckinStepper />
      </Box>
    </Layout>
  );
};

Checkin.propTypes = {};

export default Checkin;
