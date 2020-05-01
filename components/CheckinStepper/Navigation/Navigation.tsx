import React, { FC } from "react";

import { Box, Button } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

interface NavigationProps {
  handleBack: () => void;
  handleNext: () => void;
  activeStep: number;
  stepsAmt: number;
}
const Navigation: FC<NavigationProps> = ({
  handleBack,
  handleNext,
  activeStep,
  stepsAmt
}) => {
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

export default Navigation;
