import { Box, Grid } from "@material-ui/core";
import React from "react";
import {
  renderInputBox,
  renderSelectBox,
  renderButton,
  renderText,
} from "../commons/displayComponents";

export default function Step1({ state, handleInputChange, handleNext }) {
  return (
    <>
      <Box mt={1} mb={2}>
        {renderText({ label: "Please Fill Personal Details", variant: "h6" })}
      </Box>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputBox({
            label: "FirstName",
            name: "firstname",
            state,
            handleInputChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputBox({
            label: "LastName",
            name: "lastname",
            state,
            handleInputChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12}>
          {renderSelectBox({
            label: "Gender",
            name: "gender",
            state,
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
            state,
            handleInputChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputBox({
            label: "Email",
            name: "email",
            state,
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
    </>
  );
}
