import { types } from "../constants/types";

const cs = localStorage.getItem("currentSection");

export const uiReducer = (
  state = { currentSection: cs || "About Me" },
  action
) => {
  switch (action.type) {
    case types.uiChangeSection:
      return {
        ...state,
        currentSection: action.payload,
      };
    default:
      return state;
  }
};
