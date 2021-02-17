import validator from "validator";

export const simpleVal = (val) => (!validator.isEmpty(val) ? true : false);

export const isURL = (url) =>
  validator.isURL(url, { require_host: true, require_protocol: true })
    ? true
    : false;
