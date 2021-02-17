import { types } from "../constants/types";

export const deletingHobbie = (idHobbie) => {
  return (dispatch) => {
    dispatch(hobbieDeleted(idHobbie));
  };
};

export const savingNewHobbie = (value) => {
  const data = {
    ...value,
    id: new Date().getTime(),
  };
  return (dispatch) => {
    dispatch(hobbieSaved(data));
  };
};

export const deletingSocialNet = (id) => {
  return (dispatch) => {
    dispatch(socialNetDeleted(id));
  };
};

export const savingNewSocialNet = (values) => {
  const data = {
    ...values,
    id: new Date().getTime(),
  };
  return (dispatch) => {
    dispatch(newSocialNetSaved(data));
  };
};

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

//=====Synchronous=======

const hobbieDeleted = (id) => ({
  type: types.aboutmeDeleteHobbie,
  payload: id,
});

const hobbieSaved = (value) => ({
  type: types.aboutmeAddNewHobbie,
  payload: value,
});

const socialNetDeleted = (id) => ({
  type: types.aboutmeDeleteSocialNet,
  payload: id,
});

const newSocialNetSaved = (values) => ({
  type: types.aboutmeAddSocialNet,
  payload: values,
});

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
