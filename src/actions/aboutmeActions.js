import { types } from "../constants/types";

export const deletingInfo = (infoId) => {
  return (dispatch) => {
    dispatch(infoDeleted(infoId));
  };
};

export const savingNewInfo = (val) => {
  const newVal = {
    ...val,
    id: new Date().getTime(),
  };

  return (dispatch) => {
    dispatch(newInfoSaved(newVal));
  };
};

export const updatingInfo = (val) => {
  return (dispatch, getState) => {
    const { activeEditDividedData } = getState().ui;

    const data = {
      ...val,
      id: activeEditDividedData,
    };

    dispatch(infoUpdated(data));
  };
};

export const savingDescriptionValues = (values) => {
  return (dispatch) => {
    dispatch(descriptionValuesSaved(values));
  };
};

const infoDeleted = (infoId) => ({
  type: types.aboutmeDeleteInfo,
  payload: infoId,
});

const infoUpdated = (data) => ({
  type: types.aboutmeUpdateInfo,
  payload: data,
});

const newInfoSaved = (value) => ({
  type: types.aboutmeAddInfo,
  payload: value,
});

const descriptionValuesSaved = (values) => ({
  type: types.aboutmeAddDescription,
  payload: values,
});
