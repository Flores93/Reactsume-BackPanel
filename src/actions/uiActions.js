import { types } from "../constants/types";

export const hiddeAddBtn = () => ({
  type: types.uiHiddeDescriptionInput,
});

export const isEditDivData = (dataId) => ({
  type: types.uiEditDivData,
  payload: dataId,
});

export const isEditSingleData = (dataId) => ({
  type: types.uiEditSingleData,
  payload: dataId,
});

export const disableEditDivData = () => ({
  type: types.uiEditDivData,
});
export const disableEditSingleData = () => ({
  type: types.uiDisableEditSingleData,
});
