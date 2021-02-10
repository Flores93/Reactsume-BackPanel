import { types } from "../constants/types";

export const authReducer = (state = { checkingSession: true }, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        checkingSession: false,
        ...action.payload,
      };
    case types.authLogOut:
      return { checkingSession: false };
    default:
      return state;
  }
};
