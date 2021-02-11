import React from "react";
import { Divider } from "@material-ui/core";

const HDivider = ({ width = "100%", color = "white" }) => {
  return <Divider style={{ width, border: `1px solid ${color}` }} />;
};

export default HDivider;
