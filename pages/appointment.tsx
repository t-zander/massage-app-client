import { Stepper, Step, StepLabel, StepContent, Box } from '@material-ui/core';
import React, { FC } from 'react';
import AttendeeMainInfoForm from '../components/appointmentStepper/AttendeeMainInfoForm';
import DatesSelection from '../components/appointmentStepper/DatesSelection/DatesSelection';
import Layout from '../components/Layout/Layout';
import Section from '../components/Section/Section';
import StepWithActionButtons from '../components/StepWithActionButtons/StepWithActionButtons';

const Appointment: FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Layout style={{ background: '#454064' }}>
      <Section>
        <Stepper activeStep={activeStep} style={{ background: 'transparent' }}>
          <Step>
            <StepLabel>Представьтесь</StepLabel>
          </Step>
          <Step>
            <StepLabel>Выберите тип массажа и запишитесь</StepLabel>
          </Step>
          <Step>
            <StepLabel>Проверьте правильность данных</StepLabel>
          </Step>
        </Stepper>
        <Box>
          {activeStep === 0 && (
            <StepWithActionButtons
              activeStep={activeStep}
              stepsAmount={3}
              handleNext={() => {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
              }}
              handleBack={() => {
                setActiveStep((prevActiveStep) => prevActiveStep - 1);
              }}
            >
              <AttendeeMainInfoForm />
            </StepWithActionButtons>
          )}
          {activeStep === 1 && (
            <StepWithActionButtons
              activeStep={activeStep}
              stepsAmount={3}
              handleNext={() => {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
              }}
              handleBack={() => {
                setActiveStep((prevActiveStep) => prevActiveStep - 1);
              }}
            >
              <DatesSelection />
            </StepWithActionButtons>
          )}
          {activeStep === 2 && (
            <StepWithActionButtons
              activeStep={activeStep}
              stepsAmount={3}
              handleNext={() => {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
              }}
              handleBack={() => {
                setActiveStep((prevActiveStep) => prevActiveStep - 1);
              }}
            ></StepWithActionButtons>
          )}
        </Box>
      </Section>
    </Layout>
  );
};

export default Appointment;
