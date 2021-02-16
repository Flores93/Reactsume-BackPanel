import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import DefaultForm from "./DefaultForm";
import InputField from "./InputField";

import { savingNewInfo, updatingInfo } from "../../actions/aboutmeActions";

import { simpleVal } from "../../helpers/validation";
import { disableEditDivData } from "../../actions/uiActions";

const DividedInfoFormCore = ({ FormInitVal, remove, itsUpdate = false }) => {
  const [inputsOk, setInputsOk] = useState(itsUpdate ? false : true);
  const dispatch = useDispatch();

  const handleSubmit = (val) => {
    if (itsUpdate) {
      dispatch(updatingInfo(val));
      dispatch(disableEditDivData());
    } else {
      dispatch(savingNewInfo(val));
      remove();
    }
  };

  const validatingForm = ({ type, value }) => {
    if (simpleVal(type) && simpleVal(value)) {
      setInputsOk(false);
    } else {
      setInputsOk(true);
    }
  };

  return (
    <DefaultForm
      initialValues={FormInitVal}
      onSubmit={handleSubmit}
      validate={validatingForm}
    >
      <div className="mt-2">
        <div
          className="row text-center"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="col-sm-5">
            <InputField
              name="type"
              placeholder="Label, ex. Nationality"
              isRequired
            />
          </div>
          <div className="col-sm-5">
            <InputField
              name="value"
              placeholder="Value, ex. Mexican"
              isRequired
            />
          </div>
          <div className="col-sm-2">
            <button
              type="submit"
              className="btn btn-success"
              disabled={inputsOk}
            >
              <i className="far fa-save"></i>
            </button>
            <button type="button" onClick={remove} className="btn btn-danger">
              <i className="fas fa-trash-alt ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </DefaultForm>
  );
};

DividedInfoFormCore.propTypes = {
  FormInitVal: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
};

export default DividedInfoFormCore;
