import React from "react";
import { Paper } from "@material-ui/core";

const DefaultPaper = ({ children }) => {
  return (
    <Paper elevation={3} className="paperCustom">
      {children}
    </Paper>
  );
};

export default DefaultPaper;
