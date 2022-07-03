import { Box, Grid } from "@material-ui/core";
import React from "react";
import {
  renderInputBox,
  renderSelectBox,
  renderButton,
  renderText,
} from "../commons/displayComponents";

export default function Step2({
  state,
  handleInputChange,
  handleNext,
  handlePrev,
}) {
  return (
    <>
      <Box mt={1} mb={2}>
        {renderText({ label: "A bot about eduction", variant: "h6" })}
      </Box>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelectBox({
            label: "Qualification",
            name: "highestDegree",
            state,
            options: [
              { key: "graduation", value: "Graduation" },
              { key: "b.tech", value: "B.TEch" },
              { key: "m.tech", value: "M.Tech" },
            ],
            handleInputChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputBox({
            label: "Issued By College",
            name: "issuedBy",
            state,
            handleInputChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputBox({
            label: "Year Of Passing",
            name: "yearOfPassing",
            state,
            handleInputChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputBox({
            label: "Job Types",
            name: "jobTypes",
            state,
            handleInputChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="flex-end">
        <Box p={2}>
          {renderButton({
            label: "BACK",
            handleOnButttonClick: handlePrev,
            color: "default",
          })}
        </Box>
        <Box p={2}>
          {renderButton({
            label: "Next",
            handleOnButttonClick: handleNext,
          })}
        </Box>
      </Grid>
    </>
  );
}
