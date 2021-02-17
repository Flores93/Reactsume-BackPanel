import React from "react";
import PropTypes from "prop-types";

const AddNewElement = ({ addHandler }) => {
  return (
    <div className="container row text-center mt-4">
      <span onClick={addHandler} className="noSelect itsAPointer">
        <div className="col-12">
          <i className="green fas fa-plus-circle fa-3x" />
        </div>
        <div className="col-12">Add Description</div>
      </span>
    </div>
  );
};

AddNewElement.propTypes = {
  addHandler: PropTypes.func.isRequired,
};

export default AddNewElement;
