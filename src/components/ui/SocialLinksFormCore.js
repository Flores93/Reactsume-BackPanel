import React from "react";
import PropTypes from "prop-types";

import DefaultForm from "./DefaultForm";
import InputField from "./InputField";

const SocialLinksFormCore = ({ FormInitVal, remove }) => {
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
            <InputField name="net" placeholder="LinkedIn..." />
          </div>
          <div className="col-5">
            <InputField
              name="link"
              placeholder="https://linkedin.com/yourprofile"
            />
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

SocialLinksFormCore.propTypes = {
  FormInitVal: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
};

export default SocialLinksFormCore;
