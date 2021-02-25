import React from "react";
import PropTypes from "prop-types";

const EditButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      <i className="fas fa-edit" />
    </button>
  );
};

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EditButton;
