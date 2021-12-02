import { Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Typography variant="h6">
      &copy; Paul Mason {new Date().getFullYear()}
    </Typography>
  );
};
