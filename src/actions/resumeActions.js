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

//Synchronous

const experienceSaved = (exp) => ({
  type: types.resumeAddNewExpCompany,
  payload: exp,
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
