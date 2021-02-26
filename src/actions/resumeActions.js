import { types } from "../constants/types";

export const savingNewExperience = ({ company, charge, desc }) => {
  const data = {
    company: company,
    description: [{ charge, desc, idDesc: new Date().getTime() }],
    id: new Date().getTime(),
  };

  return (dispatch) => {
    dispatch(experienceSaved(data));
  };
};

export const deletingExperience = (idExp) => {
  return (dispatch) => {
    dispatch(experienceDeleted(idExp));
  };
};

export const updatingCompanyName = (newName) => {
  return (dispatch, getState) => {
    const { activeEditSingleData: id } = getState().ui;

    dispatch(companyNameChanged({ newName, id }));
  };
};

export const updatingExpDuty = (desc) => {
  return (dispatch) => {
    dispatch(updatedDutyExp(desc));
  };
};

export const deletingExpDuty = (Ids) => {
  return (dispatch) => {
    dispatch(dutyExpDeleted(Ids));
  };
};

export const addingNewCompanyDuty = (duty) => {
  return (dispatch) => {
    dispatch(companyDutyAdded(duty));
  };
};

export const addingNewEducation = (edu) => {
  return (dispatch) => {
    const data = {
      ...edu,
      id: new Date().getTime(),
    };
    dispatch(educationAdded(data));
  };
};

export const updatingEducation = (data) => {
  return (dispatch, getState) => {
    const { activeEditDividedData: id } = getState().ui;

    const edu = {
      ...data,
      id,
    };

    dispatch(educationUpdated(edu));
  };
};

export const deletingEducation = () => {
  return (dispatch, getState) => {
    const { activeEditDividedData: id } = getState().ui;
    dispatch(educationDeleted(id));
  };
};

//Synchronous

const experienceSaved = (exp) => ({
  type: types.resumeAddNewExpCompany,
  payload: exp,
});

const experienceDeleted = (idExp) => ({
  type: types.resumeDeleteExpCompany,
  payload: idExp,
});

const companyNameChanged = (newName) => ({
  type: types.resumeUpdateCompanyName,
  payload: newName,
});

const updatedDutyExp = (desc) => ({
  type: types.resumeUpdateDutyCompany,
  payload: desc,
});

const dutyExpDeleted = (ids) => ({
  type: types.resumeDeleteDutyCompany,
  payload: ids,
});

const companyDutyAdded = (duty) => ({
  type: types.resumeAddNewDutyCompany,
  payload: duty,
});

const educationAdded = (edu) => ({
  type: types.resumeAddNewEducation,
  payload: edu,
});

const educationUpdated = (data) => ({
  type: types.resumeUpdateEducation,
  payload: data,
});

const educationDeleted = (id) => ({
  type: types.resumeDeleteEducation,
  payload: id,
});
