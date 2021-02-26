import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

export const useFormHandler = (
  submitAction,
  removeAction,
  validation,
  isUpdate
) => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(isUpdate ? false : true);

  const submit = (values) => {
    dispatch(submitAction(values));
    removeAction(true);
  };

  const remove = () => {
    removeAction();
  };

  const validate = (val) => {
    validation(val, setIsDisabled);
  };

  return { submit, remove, validate, isDisabled };
};

useFormHandler.protoTypes = {
  submitAction: PropTypes.func.isRequired,
  removeAction: PropTypes.func.isRequired,
  validation: PropTypes.func.isRequired,
  isUpdate: PropTypes.bool,
};
