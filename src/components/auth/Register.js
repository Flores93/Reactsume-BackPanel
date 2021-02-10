import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import validator from "validator";
import Swal from "sweetalert2";

import AuthFrame from "./AuthFrame";
import BooleanSubmitBtn from "../ui/BooleanSubmitBtn";
import DefaultForm from "../ui/DefaultForm";
import DefaultPaper from "../ui/DefaultPaper";
import InputField from "../ui/InputField";

import { startLogin } from "../../actions/authActions";

import { registerFormInitVal } from "../../constants/formsInitialValues";

const Register = () => {
  const dispatch = useDispatch();
  const [allItsOk, setAllItsOk] = useState(false);
  const { goBack } = useHistory();

  const handleSubmit = ({ userName, email, password, password2 }) => {
    if (validator.isEmail(email)) {
      dispatch(startLogin({ userName, email }));
    } else {
      Swal.fire("Error", "Invalid Email", "error");
    }
  };

  const validatingForm = ({ password, password2 }) => {
    if (password === password2 && password.length > 3 && password2.length > 3) {
      setAllItsOk(true);
    } else {
      setAllItsOk(false);
    }
  };

  return (
    <AuthFrame>
      <DefaultPaper>
        <h3>Register</h3>
        <DefaultForm
          initialValues={registerFormInitVal}
          onSubmit={handleSubmit}
          validate={validatingForm}
        >
          <InputField
            name="userName"
            label="Name"
            isRequired={true}
            placeholder="Your Name"
          />

          <InputField
            name="email"
            type="email"
            label="E-mail"
            isRequired={true}
            placeholder="example@mail.com"
          />

          <InputField
            name="password"
            type="password"
            label="Password"
            isRequired={true}
          />
          <InputField
            name="password2"
            type="password"
            label="Repeat password"
            isRequired={true}
          />

          <BooleanSubmitBtn
            isEnable={allItsOk}
            text="Create account"
            icon={<i className="fas fa-user-plus" />}
          />
        </DefaultForm>
        <hr />
        <small className="mutedText" onClick={() => goBack()}>
          I already have an account
        </small>
      </DefaultPaper>
    </AuthFrame>
  );
};

export default Register;
