import { types } from "../constants/types";

export const descFieldsOk = () => ({
  type: types.uiDescFieldsOk,
});

export const descFieldsError = () => ({
  type: types.uiDescFieldsError,
});

export const isEditDivData = (dataId) => ({
  type: types.uiEditDivData,
  payload: dataId,
});

export const disableEditDivData = (dataId) => ({
  type: types.uiEditDivData,
});
