import React from "react";
import PropTypes from "prop-types";

const SmallAlerts = ({
  text,
  alert = false,
  danger = false,
  success = false,
}) => {
  return (
    <>
      {alert && (
        <small className="alertRed">
          {text} <i className="fas fa-exclamation" />
        </small>
      )}
    </>
  );
};

SmallAlerts.propTypes = {
  text: PropTypes.string.isRequired,
  alert: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
};

export default SmallAlerts;
