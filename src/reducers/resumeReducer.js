import { types } from "../constants/types";

import { resumeInitValues } from "../constants/formsInitialValues";

export const resumeReducer = (state = resumeInitValues, action) => {
  switch (action.type) {
    case types.resumeAddNewExpCompany:
      return {
        ...state,
        experiences: [action.payload, ...state.experiences],
      };
    case types.resumeAddNewDutyCompany:
      const newDuty = {
        charge: action.payload.charge,
        desc: action.payload.desc,
        idDesc: action.payload.idDesc,
      };
      return {
        experiences: state.experiences.map((exp) =>
          exp.id === action.payload.expId
            ? { ...exp, description: [newDuty, ...exp.description] }
            : exp
        ),
      };
    case types.resumeUpdateDutyCompany:
      const finalDesc = {
        charge: action.payload.charge,
        desc: action.payload.desc,
        idDesc: action.payload.idDesc,
      };
      return {
        experiences: state.experiences.map((exp) =>
          exp.id === action.payload.expId
            ? {
                ...exp,
                description: exp.description.map((desc) =>
                  desc.idDesc === action.payload.idDesc ? finalDesc : desc
                ),
              }
            : exp
        ),
      };

    case types.resumeDeleteDutyCompany:
      return {
        experiences: state.experiences.map((exp) =>
          exp.id === action.payload.expId
            ? {
                ...exp,
                description: exp.description.filter(
                  (desc) => desc.idDesc !== action.payload.idDesc
                ),
              }
            : exp
        ),
      };

    default:
      return state;
  }
};
