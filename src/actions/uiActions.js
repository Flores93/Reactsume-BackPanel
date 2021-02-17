import { types } from "../constants/types";

export const hiddeAddBtn = () => ({
  type: types.uiHiddeDescriptionInput,
});

export const isEditDivData = (dataId) => ({
  type: types.uiEditDivData,
  payload: dataId,
});

export const disableEditDivData = (dataId) => ({
  type: types.uiEditDivData,
});
