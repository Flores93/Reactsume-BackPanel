import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import validator from "validator";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

import AuthFrame from "./AuthFrame";
import DefaultPaper from "../ui/DefaultPaper";

import { loginFormInitVal } from "../../constants/formsInitialValues";

const Login = () => {
  const [inputsOk, setInputsOk] = useState(false);
  const { push } = useHistory();

  const handleSubmit = ({ email, password }) => {
    if (validator.isEmail(email)) {
      console.log(email, password);
      setInputsOk(false);
    } else {
      Swal.fire("Error", "Invalid E-mail", "error");
    }
  };

  const validatingForm = ({ email, password }) => {
    if (email.length > 3 && password.length > 3) {
      setInputsOk(true);
    }
  };

  return (
    <AuthFrame>
      <DefaultPaper>
        <Formik
          initialValues={loginFormInitVal}
          onSubmit={handleSubmit}
          validate={validatingForm}
        >
          <Form autoComplete="off">
            <label htmlFor="email">E-mail:</label>
            <Field
              className="form-control mb-3"
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
            />

            <label htmlFor="password">Password:</label>
            <Field
              className="form-control mb-3"
              id="password"
              type="password"
              name="password"
            />

            <button
              className="btn btn-primary col-12"
              type="submit"
              disabled={inputsOk ? false : true}
            >
              Login <i className="fas fa-sign-in-alt"></i>
            </button>
          </Form>
        </Formik>
        <hr />
        <small className="mutedText" onClick={() => push("/register")}>
          Create account
        </small>
      </DefaultPaper>
    </AuthFrame>
  );
};

export default Login;
