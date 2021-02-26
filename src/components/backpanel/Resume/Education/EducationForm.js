import React from "react";
import PropTypes from "prop-types";

import DefaultForm from "../../../ui/DefaultForm";

import SaveRemoveBtn from "../../../ui/SaveRemoveBtn";
import InputField from "../../../ui/InputField";

import { useFormHandler } from "../../../../hooks/useFormHandler";

import { simpleVal } from "../../../../helpers/validation";

const validation = ({ institution, subject }, setDisable) => {
  if (simpleVal(institution) && simpleVal(subject)) {
    setDisable(false);
  } else {
    setDisable(true);
  }
};

const EducationForm = ({ initVal, remover, submitAct, isUpdate = false }) => {
  const { submit, remove, validate, isDisabled } = useFormHandler(
    submitAct,
    remover,
    validation,
    isUpdate
  );

  return (
    <DefaultForm initialValues={initVal} onSubmit={submit} validate={validate}>
      <div className="row">
        <div className="col-6">
          <InputField name="institution" placeholder="Udemy..." isRequired />
        </div>
        <div className="col-6">
          <InputField
            name="subject"
            placeholder="Python course..."
            isRequired
          />
        </div>
        <div className="col-10">
          <InputField
            name="url"
            placeholder="https://udemy.com/certificate... (Optional)"
          />
        </div>
        <SaveRemoveBtn remove={remove} isDisabled={isDisabled} />
      </div>
    </DefaultForm>
  );
};

EducationForm.propTypes = {
  initVal: PropTypes.object.isRequired,
  remover: PropTypes.func,
  submitAct: PropTypes.func,
  isUpdate: PropTypes.bool,
};

export default EducationForm;
