import React from "react";
import PropTypes from "prop-types";

const SaveRemoveBtn = ({ isDisabled, remove }) => {
  return (
    <div className="col-sm-2">
      <button type="submit" className="btn btn-success" disabled={isDisabled}>
        <i className="far fa-save"></i>
      </button>
      <button type="button" onClick={remove} className="btn btn-danger">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

SaveRemoveBtn.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  remove: PropTypes.func.isRequired,
};

export default SaveRemoveBtn;
