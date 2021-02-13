import React from "react";
import { Grid } from "@material-ui/core";

import BooleanSubmitBtn from "../ui/BooleanSubmitBtn";
import DefaultForm from "../ui/DefaultForm";
import InputField from "../ui/InputField";
import HDivider from "../ui/HDivider";

import {
  displayNameDescriptionInitVal,
  userDataInitVal,
} from "../../constants/formsInitialValues";

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
          <BooleanSubmitBtn text="Save" isEnable={false} />
        </Grid>
      </DefaultForm>

      {/* Extra data form */}
      <br />
      <HDivider />
      <DefaultForm
        initialValues={userDataInitVal}
        onSubmit={handleSubmit}
        validate={validatingForm}
      >
        <Grid container className="mt-3">
          <Grid item xs={6}>
            <InputField
              name="nationality"
              placeholder="Nationality"
              label="Nationality"
            />
          </Grid>
          <Grid item xs={6}>
            <InputField
              name="birthPlace"
              placeholder="Place of birth"
              label="Place of birth"
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              name="birthDay"
              placeholder="Your birthday"
              label="Your birthday"
            />
          </Grid>
        </Grid>
      </DefaultForm>
    </>
  );
};

export default AboutMeSection;
