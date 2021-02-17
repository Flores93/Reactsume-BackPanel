import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Field } from "formik";

import DefaultForm from "./DefaultForm";
import InputField from "./InputField";
import SaveRemoveBtn from "./SaveRemoveBtn";

import { savingNewHobbie } from "../../actions/aboutmeActions";

import { simpleVal } from "../../helpers/validation";

const ChipsFormCore = ({ FormInitVal, remove, isSkill = false }) => {
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    if (isSkill) {
      console.log("new skill: ", values);
      // dispatch()
    } else {
      dispatch(savingNewHobbie(values));
      remove();
    }
  };

  const validatingForm = ({ label, icon, bgColor }) => {
    if (simpleVal(label) && simpleVal(icon) && simpleVal(bgColor)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <DefaultForm
      initialValues={FormInitVal}
      onSubmit={handleSubmit}
      validate={validatingForm}
    >
      <div className="container mt-4">
        <div className="row">
          <div className="col-5">
            <InputField
              name="label"
              placeholder={!isSkill ? "Cycling" : "ReactJs"}
            />
          </div>
          <div className="col-3">
            <InputField
              name="icon"
              placeholder={`${
                !isSkill ? "fas fa-biking (fontAwesome)" : "Image (URL)"
              }`}
            />
          </div>
          <div className="col-2">
            {!isSkill ? (
              <Field className="form-control" component="select" name="bgColor">
                <option>Select a color</option>
                <option value="secondary">Red</option>
                <option value="primary">Blue</option>
              </Field>
            ) : (
              <InputField
                name="bgColor"
                placeholder="Select pallette a color"
              />
            )}
          </div>
          <SaveRemoveBtn isDisabled={disable} remove={remove} />
        </div>
      </div>
    </DefaultForm>
  );
};

ChipsFormCore.propTypes = {
  FormInitVal: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  isSkill: PropTypes.bool,
};

export default ChipsFormCore;
