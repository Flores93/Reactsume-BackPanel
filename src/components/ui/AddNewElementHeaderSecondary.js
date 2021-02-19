import React from "react";
import PropTypes from "prop-types";

const AddNewElementHeaderSecondary = ({ title, addHandler, label }) => {
  return (
    <>
      {title && <h3>{title}</h3>}
      <span onClick={addHandler} className="itsAPointer textStart noSelect">
        <i className="fas green fa-plus-circle mr-1" />
        {label}
      </span>
    </>
  );
};

AddNewElementHeaderSecondary.propTypes = {
  title: PropTypes.string,
  addHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default AddNewElementHeaderSecondary;
