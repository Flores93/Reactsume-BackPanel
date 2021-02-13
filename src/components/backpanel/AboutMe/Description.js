import React from "react";
import { Grid } from "@material-ui/core";

import BooleanSubmitBtn from "../../ui/BooleanSubmitBtn";
import DefaultForm from "../../ui/DefaultForm";
import InputField from "../../ui/InputField";

import { displayNameDescriptionInitVal } from "../../../constants/formsInitialValues";

const Description = () => {
  const handleSubmit = () => {};
  const validatingForm = () => {};

  return (
    <DefaultForm
      initialValues={displayNameDescriptionInitVal}
      onSubmit={handleSubmit}
      validate={validatingForm}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputField
            name="displayName"
            placeholder="Display name"
            label="Display Name"
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            name="profession"
            placeholder="Profession"
            label="Profession"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name="description"
            label="Little description about yourself"
          />
        </Grid>
        <BooleanSubmitBtn text="Save" isEnable={true} />
      </Grid>
    </DefaultForm>
  );
};

export default Description;
