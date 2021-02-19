import React, { useState } from "react";
import PropTypes from "prop-types";

import CompanyDutiesHandler from "./CompanyDutiesHandler";
import DefaultForm from "./DefaultForm";
import InputField from "./InputField";
import SaveRemoveBtn from "./SaveRemoveBtn";

//fix errors, bugs, etc...
const NewExperienceForm = ({
  FormInitVal,
  description,
  remove,
  handlerDuties,
}) => {
  const [disable, setDisable] = useState(true);

  const handleSubmit = (values) => {
    // setDisable(true);
    console.log(values);
  };

  const validatingForm = (val) => {};

  return (
    <>
      <DefaultForm
        initialValues={FormInitVal}
        onSubmit={handleSubmit}
        validate={validatingForm}
      >
        <InputField
          label="Company"
          name="company"
          placeholder="Microsoft... (05/2019 - 01/2021)"
          isRequired
        />

        <CompanyDutiesHandler setDuty={handlerDuties} initState={description} />

        <SaveRemoveBtn isDisabled={false} remove={remove} />
      </DefaultForm>
    </>
  );
};

NewExperienceForm.propTypes = {
  FormInitVal: PropTypes.object.isRequired,
  description: PropTypes.array.isRequired,
};

export default NewExperienceForm;
