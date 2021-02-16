import React from "react";
import PropTypes from "prop-types";

import { Divider } from "@material-ui/core";

const HDivider = ({ width = "100%", color = "white", mt = "", mb = "" }) => {
  return (
    <Divider
      style={{
        width,
        border: `1px solid ${color}`,
        marginTop: `${mt}`,
        marginBottom: `${mb}`,
      }}
    />
  );
};

HDivider.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
};

export default HDivider;
