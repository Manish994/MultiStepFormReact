import React, { Component } from "react";
import {
  Box,
  Grid,
  withStyles,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Styles } from "./commons/style";
import { renderText } from "./commons/displayComponents";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Finished from "./steps/Finishsed";

//Box is block level component
//this is similar to bootstrap div
//paper => bootstrap card
class FormComponents extends Component {
  state = {
    data: {
      firstname: "",
      lastname: "",
      gneder: "",
      phone: "",
      email: "",

      highestDegree: "",
      issuedBy: "",
      yearOfPassing: "",
      jobTypes: "",

      skill: "",
      jobApplyFor: "",
      workExperience: "",
      expectedSalary: "",
    },
    errors: {},
    currentStep: 0,
  };

  render() {
    const { classes } = this.props;
    const handleInputChange = ({ target }) => {
      const { data, errors } = this.state;
      target.value.length <= 3
        ? (errors[target.name] = `${target.name} must have at lest 3 character`)
        : (errors[target.name] = "");
      data[target.name] = target.value;
      this.setState({ data, errors });
    };

    const handleNext = () => {
      let { currentStep } = this.state;
      currentStep = currentStep + 1;

      this.setState({ currentStep });
    };
    const handlePrev = () => {
      let { currentStep } = this.state;
      currentStep = currentStep - 1;
      this.setState({ currentStep });
    };

    const StepperSteps = [
      { label: "Personal Bio" },
      { label: "Education" },
      { label: "Professional" },
    ];

    const getStepsItems = (steps) => {
      switch (steps) {
        case 0:
          return (
            <Step1
              state={this.state}
              handleInputChange={handleInputChange}
              handleNext={handleNext}
            />
          );
        case 1:
          return (
            <Step2
              state={this.state}
              handleInputChange={handleInputChange}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          );
        case 2:
          return (
            <Step3
              state={this.state}
              handleInputChange={handleInputChange}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          );
        case 3:
          return <Finished state={this.state.data} />;
        default:
          return (
            <Step1
              state={this.state}
              handleInputChange={handleInputChange}
              handleNext={handleNext}
            />
          );
      }
    };

    return (
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={7}>
          <Box p={2} mb={2} component={Paper}>
            {renderText({ label: "Multi Step Sign Up Form" })}
            <Stepper activeStep={this.state.currentStep} alternativeLabel>
              {StepperSteps.map((item, index) => (
                <Step key={index}>
                  <StepLabel>{item.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Box component={Paper}>
            <form className={classes.form}>
              {getStepsItems(this.state.currentStep)}
            </form>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

FormComponents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(FormComponents);
