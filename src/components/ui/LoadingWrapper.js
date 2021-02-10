import { CircularProgress } from "@material-ui/core";
import React from "react";
import AuthFrame from "../auth/AuthFrame";

const LoadingWrapper = () => {
  return (
    <AuthFrame>
      <CircularProgress style={{ color: "#1a90ff" }} />
      Loading...
    </AuthFrame>
  );
};

export default LoadingWrapper;
