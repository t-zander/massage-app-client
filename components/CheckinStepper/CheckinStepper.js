import { useState } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Connector from "./Connector/Connector";
import StepIcon from "./StepIcon/StepIcon";
import ClientInfo from "./Steps/ClientInfo/ClientInfo";
import SelectTime from "./Steps/SelectTime/SelectTime";
import CheckAllInfo from "./Steps/CheckAllInfo/CheckAllInfo";
import Navigation from "./Navigation/Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 2),
    backgroundColor: fade(theme.palette.secondary.main, 0.8),
  },
  content: {
    width: "100%",
    borderRadius: "10px",
  },
  stepper: {
    backgroundColor: "transparent",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  completedText: {
    color: theme.palette.primary.light,
  },
}));

const steps = ["представьтесь", "выберите дату и время", "проверьте данные"];

const CheckinStepper = () => {
  const [stepperState, setStepperState] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    selectedDays: [],
  });

  const handleInputChange = (prop, value) => {
    setStepperState({
      ...stepperState,
      [prop]: value,
    });
  };

  const stepComponents = [
    <ClientInfo
      name={stepperState.name}
      surname={stepperState.surname}
      phoneNumber={stepperState.phoneNumber}
      handleInputChange={handleInputChange}
    />,
    <SelectTime
      selectedDays={stepperState.selectedDays}
      handleDateChange={handleInputChange}
    />,
    <CheckAllInfo />,
  ];

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className={classes.root}>
      <Stepper
        className={classes.stepper}
        alternativeLabel
        activeStep={activeStep}
        connector={<Connector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepIcon}>
              <span className={index < activeStep ? classes.completedText : ""}>
                {label}
              </span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.content}>
        <div>
          {stepComponents[activeStep]}
          <Navigation
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
            stepsAmt={steps.length}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckinStepper;
