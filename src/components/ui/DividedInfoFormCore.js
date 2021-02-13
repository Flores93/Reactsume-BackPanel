import React from "react";

import DefaultForm from "./DefaultForm";
import InputField from "./InputField";

const DividedInfoFormCore = ({ FormInitVal, remove }) => {
  const handleSubmit = (values) => {
    console.log(values);
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
            <InputField name="type" placeholder="Label, ex. Nationality" />
          </div>
          <div className="col-5">
            <InputField name="value" placeholder="Value, ex. Mexican" />
          </div>
          <div className="col-1">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
          <div className="col-1">
            <i
              onClick={remove}
              className="fas itsAPointer red fa-trash-alt ml-2"
            ></i>
          </div>
        </div>
      </div>
    </DefaultForm>
  );
};

export default DividedInfoFormCore;
