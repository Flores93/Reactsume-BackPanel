import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

const InputField = ({
  label = null,
  type = "text",
  name,
  placeholder = "",
  isRequired = false,
}) => {
  return (
    <>
      {label && (
        <label className="labelMini" htmlFor="email">
          {label}:
        </label>
      )}
      <Field
        className="form-control mb-1"
        type={`${type}`}
        id={name}
        name={name}
        placeholder={placeholder}
        required={isRequired}
      />
    </>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  extraCss: PropTypes.string,
};

export default InputField;
