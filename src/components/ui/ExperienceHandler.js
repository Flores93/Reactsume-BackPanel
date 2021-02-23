import React from "react";
import PropTypes from "prop-types";

const ExperienceHandler = ({ company }) => {
  return (
    <>
      <h3>{company}</h3>
    </>
  );
};

ExperienceHandler.propTypes = {
  company: PropTypes.string.isRequired,
};

export default ExperienceHandler;
