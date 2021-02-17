import { types } from "../constants/types";

const initState = {
  descriptionFieldsOk: true,
  activeEditDividedData: null,
  hiddeDescriptionInputs: true,
};

export const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case types.uiEditDivData:
      return {
        ...state,
        activeEditDividedData: action.payload,
      };
    case types.uiDisableEditDivData:
      return {
        ...state,
        activeEditDividedData: null,
      };
    case types.uiHiddeDescriptionInput:
      return {
        ...state,
        hiddeDescriptionInputs: !state.hiddeDescriptionInputs,
      };
    default:
      return state;
  }
};
