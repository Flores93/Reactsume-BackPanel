import validator from "validator";

export const simpleVal = (val) => {
  if (!validator.isEmpty(val)) {
    return true;
  } else {
    return false;
  }
};
