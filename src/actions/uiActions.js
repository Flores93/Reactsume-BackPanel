import { types } from "../constants/types";

export const newSection = (nextSection) => {
  return (dispatch) => {
    localStorage.setItem("currentSection", nextSection);
    dispatch(changeSection(nextSection));
  };
};

const changeSection = (nextSection) => ({
  type: types.uiChangeSection,
  payload: nextSection,
});
