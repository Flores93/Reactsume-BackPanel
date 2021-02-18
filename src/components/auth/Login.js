import React, { useState } from "react";
import { useDispatch } from "react-redux";
import validator from "validator";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

import AuthFrame from "./AuthFrame";
import BooleanSubmitBtn from "../ui/BooleanSubmitBtn";
import DefaultForm from "../ui/DefaultForm";
import DefaultPaper from "../ui/DefaultPaper";
import InputField from "../ui/InputField";

import { startLogin } from "../../actions/authActions";

import { loginFormInitVal } from "../../constants/formsInitialValues";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleSubmit = ({ email }) => {
    if (validator.isEmail(email)) {
      setDisable(false);
      dispatch(startLogin({ userName: "jose luis", email }));
    } else {
      Swal.fire("Error", "Invalid E-mail", "error");
    }
  };

  const validatingForm = ({ email, password }) => {
    if (email.length > 3 && password.length > 3) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <AuthFrame>
      <DefaultPaper>
        <DefaultForm
          initialValues={loginFormInitVal}
          onSubmit={handleSubmit}
          validate={validatingForm}
        >
          <InputField
            label="E-mail"
            type="email"
            name="email"
            placeholder="example@email.com"
          />

          <InputField label="Password" type="password" name="password" />

          <BooleanSubmitBtn
            text="Login"
            isEnable={disable}
            icon={<i className="fas fa-sign-in-alt" />}
          />
        </DefaultForm>
        <hr />
        <small className="mutedText" onClick={() => push("/register")}>
          Create account
        </small>
      </DefaultPaper>
    </AuthFrame>
  );
};

export default Login;
