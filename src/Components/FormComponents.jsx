import React, { Component } from "react";
import { Box, Grid, withStyles, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { Styles } from "./commons/style";
import { renderText } from "./commons/displayComponents";
import {
  renderInputBox,
  renderSelectBox,
  renderButton,
} from "./commons/displayComponents";

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
      console.log("handle Nextr cliek");
    };

    return (
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={7}>
          <Box p={2} mb={2} component={Paper}>
            {renderText({ label: "Stepper Component" })}
          </Box>
          <Box component={Paper}>
            <form className={classes.form}>
              <Box mt={2} mb={2}>
                {renderText({ label: "Form Component 1" })}
              </Box>

              <Grid container spacing={2} style={{ marginBottom: "10px" }}>
                <Grid item xs={12} sm={6}>
                  {renderInputBox({
                    label: "FirstName",
                    name: "firstname",
                    state: this.state,
                    handleInputChange,
                  })}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {renderInputBox({
                    label: "LastName",
                    name: "lastname",
                    state: this.state,
                    handleInputChange,
                  })}
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ marginBottom: "10px" }}>
                <Grid item xs={12}>
                  {renderSelectBox({
                    label: "Gender",
                    name: "gender",
                    state: this.state,
                    options: [
                      { key: "Male", value: "Male" },
                      { key: "Female", value: "Female" },
                      { key: "Other", value: "Other" },
                    ],
                    handleInputChange,
                  })}
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ marginBottom: "10px" }}>
                <Grid item xs={12} sm={6}>
                  {renderInputBox({
                    label: "Phone",
                    name: "phone",
                    state: this.state,
                    handleInputChange,
                  })}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {renderInputBox({
                    label: "Email",
                    name: "email",
                    state: this.state,
                    handleInputChange,
                  })}
                </Grid>
              </Grid>
              <Grid container spacing={2} justifyContent="flex-end">
                <Box p={2}>
                  {renderButton({
                    label: "next",
                    handleOnButttonClick: handleNext,
                  })}
                </Box>
              </Grid>
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
