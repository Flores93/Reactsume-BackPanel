import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";

import BooleanSubmitBtn from "../../ui/BooleanSubmitBtn";
import DefaultForm from "../../ui/DefaultForm";
import InputField from "../../ui/InputField";
import SmallAlerts from "../../ui/SmallAlerts";

import { savingDescriptionValues } from "../../../actions/aboutmeActions";

import { simpleVal } from "../../../helpers/validation";
import AddNewElement from "../../ui/AddNewElement";
import { hiddeAddBtn } from "../../../actions/uiActions";

export const DescriptionInputs = () => {
  const { displayName, profession, description } = useSelector(
    (state) => state.aboutMe
  );
  const { hiddeDescriptionInputs } = useSelector((state) => state.ui);
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(savingDescriptionValues(values));
    dispatch(hiddeAddBtn());
  };

  const validatingForm = ({ displayName, profession, description }) => {
    if (
      simpleVal(displayName) &&
      simpleVal(profession) &&
      simpleVal(description)
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handlerEdit = () => {
    dispatch(hiddeAddBtn());
    setDisable(false);
  };

  const DescriptionVisualization = () => {
    return (
      <div className="container text-center">
        <h2>{displayName}</h2>
        <h3>{profession}</h3>
        <Typography variant="h6" align="center">
          {description}
        </Typography>
        <i onClick={handlerEdit} className="itsAPointer noselect fas fa-edit" />
      </div>
    );
  };

  return (
    <>
      {!hiddeDescriptionInputs ? (
        <DefaultForm
          initialValues={{ displayName, profession, description }}
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

            {disable && <SmallAlerts alert text="Each field should filled" />}
            <BooleanSubmitBtn text="Save" isEnable={disable} />
          </Grid>
        </DefaultForm>
      ) : (
        <DescriptionVisualization />
      )}
    </>
  );
};

export const DescriptionReadOnly = () => {
  const { hiddeDescriptionInputs } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const addDescription = () => {
    dispatch(hiddeAddBtn());
  };

  return (
    <>
      {hiddeDescriptionInputs ? (
        <AddNewElement addHandler={addDescription} />
      ) : (
        <DescriptionInputs />
      )}
    </>
  );
};
