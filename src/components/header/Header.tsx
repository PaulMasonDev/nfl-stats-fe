import { Grid, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { makeStyles } from "@mui/styles";

const primaryColor = "blue";
const secondaryColor = "white";

const useStyles: any = makeStyles({
  link: {
    padding: "0px 10px 3px",
    borderRadius: "5px",
    transition: "all .3s",
  },
  active: {
    backgroundColor: primaryColor,
    color: secondaryColor,
  },
  inactive: {
    backgroundColor: secondaryColor,
    color: primaryColor,
  },
});

export const Header = () => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Typography variant="h1" className="header-title">
          NFL STATS VAULT
        </Typography>
      </Grid>
      <Grid item container direction="row" spacing={4} justifyContent="center">
        <Grid item>
          <Link
            to="/"
            className={`${classes.link} ${
              location.pathname === "/" ? classes.active : classes.inactive
            }`}
            style={{ textDecoration: "none" }}
          >
            CONTENT
          </Link>
        </Grid>
        <Grid item className="player-page">
          <Link
            to="/playerpage"
            className={`${classes.link} ${
              location.pathname === "/playerpage"
                ? classes.active
                : classes.inactive
            }`}
            style={{ textDecoration: "none" }}
          >
            PLAYER PAGE
          </Link>
        </Grid>
        <Grid item className="admin-controls">
          <Link
            to="/admincontrols"
            className={`${classes.link} ${
              location.pathname === "/admincontrols"
                ? classes.active
                : classes.inactive
            }`}
            style={{ textDecoration: "none" }}
          >
            ADMIN CONTROLS
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
