import { Button, Grid, TextField } from "@mui/material";
import React from "react";

export const AdminControls = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <TextField>Week</TextField>
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Download Player Stats
        </Button>
      </Grid>
    </Grid>
  );
};
