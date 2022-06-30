import React, { Component } from "react";
import { Box, Grid, withStyles, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { Styles } from "./commons/style";
import { renderText } from "./commons/displayComponents";

//Box is block level component
//this is similar to bootstrap div
//paper => bootstrap card
class FormComponents extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={7}>
          <Box p={2} mb={2} component={Paper}>
            {renderText({ label: "Stepper Component" })}
          </Box>
          <Box component={Paper}>
            <form className={classes.form}>
              {renderText({ label: "Form Component " })}
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
