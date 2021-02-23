import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import DefaultForm from "./DefaultForm";
import InputField from "./InputField";
import SaveRemoveBtn from "./SaveRemoveBtn";

import { savingNewExperience } from "../../actions/resumeActions";

import { simpleVal } from "../../helpers/validation";

const NewExperienceForm = ({ FormInitVal, remove }) => {
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(savingNewExperience(values));
    remove();
  };

  const validatingForm = ({ company, charge, desc }) => {
    if (simpleVal(company) && simpleVal(charge) && simpleVal(desc)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <>
      <DefaultForm
        initialValues={FormInitVal}
        onSubmit={handleSubmit}
        validate={validatingForm}
      >
        <div className="container row mb-3">
          <div className="col-12">
            <InputField
              label="Company"
              name="company"
              placeholder="Microsoft... (05/2019 - 01/2021)"
              isRequired
            />
          </div>

          <div className="col-6">
            <InputField
              label="Charge"
              name="charge"
              placeholder="IT Recruiter..."
              isRequired
            />
          </div>
          <div className="col-6">
            <InputField
              label="Duties"
              name="desc"
              placeholder="Recruit IT Professionals..."
              isRequired
            />
          </div>
        </div>

        <SaveRemoveBtn isDisabled={disable} remove={remove} />
      </DefaultForm>
    </>
  );
};

NewExperienceForm.propTypes = {
  FormInitVal: PropTypes.object.isRequired,
};

export default NewExperienceForm;
