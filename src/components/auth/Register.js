import React from "react";
import { Formik, Field, Form } from "formik";

import AuthFrame from "./AuthFrame";
import DefaultPaper from "../ui/DefaultPaper";
import { useHistory } from "react-router-dom";

import { registerFormInitVal } from "../../constants/formsInitialValues";

const Register = () => {
  const { push } = useHistory();

  const handleSubmit = (values) => {
    console.log(values);
  };

  const validatingForm = (values) => {
    console.log(values);
  };

  return (
    <AuthFrame>
      <DefaultPaper>
        <h3>Register</h3>
        <Formik
          initialValues={registerFormInitVal}
          onSubmit={handleSubmit}
          validate={validatingForm}
        >
          <Form autoComplete="off">
            <label className="labelMinif" htmlFor="email">
              Name:
            </label>
            <Field
              className="form-control mb-3"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />

            <label className="labelMinif" htmlFor="email">
              E-mail:
            </label>
            <Field
              className="form-control mb-3"
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
            />

            <button
              className="btn btn-primary col-12"
              type="submit"
              // disabled={inputsOk ? false : true}
            >
              Login <i className="fas fa-sign-in-alt"></i>
            </button>
          </Form>
        </Formik>
        <hr />
        <small className="mutedText" onClick={() => push("/")}>
          I already have an account
        </small>
      </DefaultPaper>
    </AuthFrame>
  );
};

export default Register;
