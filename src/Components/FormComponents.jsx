import React, { Component } from "react";
import { Box, Grid, withStyles, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { Styles } from "./commons/style";
import { renderText } from "./commons/displayComponents";
import Step1 from "./steps/Step1";

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
      currentStep += currentStep + 1;
      this.setState({ currentStep });
    };
    const handlePrev = () => {
      let { currentStep } = this.state;
      currentStep += currentStep - 1;
      this.setState({ currentStep });
    };

    return (
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={7}>
          <Box p={2} mb={2} component={Paper}>
            {renderText({ label: "Stepper Component" })}
          </Box>
          <Box component={Paper}>
            <form className={classes.form}>
              <Step1
                state={this.state}
                handleInputChange={handleInputChange}
                handleNext={handleNext}
              />
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
