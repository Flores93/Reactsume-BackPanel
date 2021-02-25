import { useState } from "react";
import { useDispatch } from "react-redux";

export const useFormHandler = (submitAction, removeAction, validation) => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(true);

  const submit = (values) => {
    dispatch(submitAction(values));
    remove();
  };

  const remove = () => {
    removeAction();
  };

  const validate = (val) => {
    validation(val, setIsDisabled);
  };

  return { submit, remove, validate, isDisabled };
};
