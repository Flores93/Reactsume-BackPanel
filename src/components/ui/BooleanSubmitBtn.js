import React from "react";
import PropTypes from "prop-types";

const BooleanSubmitBtn = ({ isEnable, text, icon = null }) => {
  return (
    <button
      className="btn btn-primary col-12 mt-3"
      type="submit"
      disabled={isEnable}
    >
      {text} {icon}
    </button>
  );
};

BooleanSubmitBtn.propTypes = {
  isEnable: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default BooleanSubmitBtn;
