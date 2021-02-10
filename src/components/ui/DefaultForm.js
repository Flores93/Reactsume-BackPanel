import React from "react";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";

const DefaultForm = ({
  children,
  initialValues,
  onSubmit,
  validate,
  autoComplete = "off",
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form autoComplete={autoComplete}>{children}</Form>
    </Formik>
  );
};

DefaultForm.propTypes = {
  children: PropTypes.node.isRequired,
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
};

export default DefaultForm;
