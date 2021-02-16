import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

import DefaultForm from "./DefaultForm";
import InputField from "./InputField";
import SaveRemoveBtn from "./SaveRemoveBtn";

//pending refactor
const ChipsFormCore = ({ FormInitVal, remove, isSkill = false }) => {
  const handleSubmit = (values) => {
    if (isSkill) {
      console.log("new skill: ", values);
    } else {
      console.log("new hobbie", values);
    }
  };

  const validatingForm = (values) => {};

  return (
    <DefaultForm
      initialValues={FormInitVal}
      onSubmit={handleSubmit}
      validate={validatingForm}
    >
      <div className="container mt-4">
        <div className="row">
          <div className="col-5">
            {!isSkill ? (
              <InputField name="label" placeholder="Cycling" />
            ) : (
              <InputField name="name" placeholder="Reactjs" />
            )}
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
              <Field className="form-control" component="select" name="color">
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
          <SaveRemoveBtn isDisabled={true} remove={remove} />
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
