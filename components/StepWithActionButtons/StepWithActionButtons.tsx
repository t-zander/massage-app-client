import classes from '*.module.css';
import { Box, Button, StepContent } from '@material-ui/core';
import React, { FC, PropsWithChildren } from 'react';
import Section from '../Section/Section';

interface StepWithActionButtonsProps {
  activeStep: number;
  stepsAmount: number;
  handleNext: () => void;
  handleBack: () => void;
}

const StepWithActionButtons = ({
  children,
  activeStep,
  stepsAmount,
  handleBack,
  handleNext
}: PropsWithChildren<StepWithActionButtonsProps>) => {
  return (
    <Section>
      <Box my={2}>{children}</Box>
      <Box display="flex" justifyContent="flex-end">
        {activeStep > 0 && (
          <Button onClick={handleBack} style={{ marginRight: 8 }}>
            К предыдущему шагу
          </Button>
        )}
        <Button variant="outlined" color="primary" onClick={handleNext}>
          {activeStep === stepsAmount - 1 ? 'Завершить' : 'Дальше'}
        </Button>
      </Box>
    </Section>
  );
};

export default StepWithActionButtons;
