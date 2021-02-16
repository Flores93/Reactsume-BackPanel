import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import BooleanSubmitBtn from "../../ui/BooleanSubmitBtn";
import DefaultForm from "../../ui/DefaultForm";
import InputField from "../../ui/InputField";
import SmallAlerts from "../../ui/SmallAlerts";

import { descFieldsError, descFieldsOk } from "../../../actions/uiActions";
import { savingDescriptionValues } from "../../../actions/aboutmeActions";

import { simpleVal } from "../../../helpers/validation";

const Description = () => {
  const descriptionData = useSelector((state) => state.aboutMe);
  const { descriptionFieldsOk } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(savingDescriptionValues(values));
  };

  const validatingForm = ({ displayName, profession, description }) => {
    if (
      simpleVal(displayName) &&
      simpleVal(profession) &&
      simpleVal(description)
    ) {
      dispatch(descFieldsOk());
    } else {
      dispatch(descFieldsError());
    }
  };

  return (
    <DefaultForm
      initialValues={descriptionData}
      onSubmit={handleSubmit}
      validate={validatingForm}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputField
            name="displayName"
            placeholder="Display name"
            label="Display Name"
            isRequired
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            name="profession"
            placeholder="Profession"
            label="Profession"
            isRequired
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name="description"
            label="Little description about yourself"
            isRequired
          />
        </Grid>

        {!descriptionFieldsOk && (
          <SmallAlerts alert text="Each field should filled" />
        )}
        <BooleanSubmitBtn text="Save" isEnable={descriptionFieldsOk} />
      </Grid>
    </DefaultForm>
  );
};

export default Description;
