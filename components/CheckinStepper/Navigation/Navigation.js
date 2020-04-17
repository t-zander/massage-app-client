import React from "react";
import PropTypes from "prop-types";

import { Button, Box, useMediaQuery } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const Navigation = ({ handleBack, handleNext, activeStep, stepsAmt }) => {
  return (
    <Box display="flex" justifyContent="space-around">
      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        <KeyboardArrowLeft />
        Назад
      </Button>
      <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === stepsAmt}
      >
        {activeStep === stepsAmt - 1 ? `Записаться` : `Дальше`}
        <KeyboardArrowRight />
      </Button>
    </Box>
  );
};

Navigation.propTypes = {};

export default Navigation;
