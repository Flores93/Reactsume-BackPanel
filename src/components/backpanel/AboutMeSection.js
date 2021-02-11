import React from "react";
import { Grid } from "@material-ui/core";

import DefaultForm from "../ui/DefaultForm";
import InputField from "../ui/InputField";
import HDivider from "../ui/HDivider";

import { displayNameDescriptionInitVal } from "../../constants/formsInitialValues";

const AboutMeSection = () => {
  const handleSubmit = () => {};
  const validatingForm = () => {};

  return (
    <>
      <h3>About Me</h3>
      <HDivider />
      <DefaultForm
        initialValues={displayNameDescriptionInitVal}
        onSubmit={handleSubmit}
        validate={validatingForm}
      >
        <Grid container>
          <Grid item xs={6}>
            <InputField
              name="displayName"
              placeholder="Display name"
              label="Display Name"
              extraCss="mr-2"
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
              placeholder="Little description"
              label="Little description"
            />
          </Grid>
        </Grid>
      </DefaultForm>
    </>
  );
};

export default AboutMeSection;
