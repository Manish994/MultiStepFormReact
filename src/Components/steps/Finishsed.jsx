import { Box, Grid } from "@material-ui/core";
import React from "react";
import { renderText } from "../commons/displayComponents";

export default function Finished({ state }) {
  return (
    <>
      <Box mt={1} mb={2}>
        {renderText({ label: "Your details", variant: "h6" })}
      </Box>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Box p={2}>{JSON.stringify(state, null, 4)}</Box>
      </Grid>
    </>
  );
}
