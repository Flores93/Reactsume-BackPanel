import { types } from "../constants/types";
import { aboutMeInitValues } from "../constants/formsInitialValues";

export const aboutmeReducer = (state = aboutMeInitValues, action) => {
  switch (action.type) {
    case types.aboutmeAddDescription:
      return {
        ...state,
        ...action.payload,
      };
    case types.aboutmeAddInfo:
      return {
        ...state,
        infos: [...state.infos, action.payload],
      };
    case types.aboutmeUpdateInfo:
      return {
        ...state,
        infos: state.infos.map((info) =>
          info.id === action.payload.id ? action.payload : info
        ),
      };
    case types.aboutmeDeleteInfo:
      return {
        ...state,
        infos: state.infos.filter((info) => info.id !== action.payload),
      };
    case types.aboutmeAddSocialNet:
      return {
        ...state,
        socials: [...state.socials, action.payload],
      };
    case types.aboutmeDeleteSocialNet:
      return {
        ...state,
        socials: state.socials.filter((social) => social.id !== action.payload),
      };
    case types.aboutmeAddNewHobbie:
      return {
        ...state,
        hobbies: [...state.hobbies, action.payload],
      };
    case types.aboutmeDeleteHobbie:
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => hobby.id !== action.payload),
      };
    default:
      return state;
  }
};
