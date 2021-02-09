import { types } from "../constants/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
