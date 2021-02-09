import { Field } from "formik";
import React from "react";

const InputField = ({ type = "text" }) => {
  return (
    <>
      <label className="labelMinif" htmlFor="email">
        Name:
      </label>
      <Field
        className="form-control mb-3"
        type={`${type}`}
        id="name"
        name="name"
        placeholder="Your name"
      />
    </>
  );
};

export default InputField;
