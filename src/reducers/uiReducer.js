import { types } from "../constants/types";

const initState = {
  descriptionFieldsOk: true,
  activeEditDividedData: null,
};

export const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case types.uiDescFieldsOk:
      return {
        ...state,
        descriptionFieldsOk: true,
      };
    case types.uiDescFieldsError:
      return {
        ...state,
        descriptionFieldsOk: false,
      };
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
    default:
      return state;
  }
};
