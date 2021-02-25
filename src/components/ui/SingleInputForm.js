import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import DefaultForm from "./DefaultForm";
import SaveRemoveBtn from "./SaveRemoveBtn";
import InputField from "./InputField";

import { disableEditSingleData } from "./../../actions/uiActions";

import { simpleVal } from "../../helpers/validation";

const SingleInputForm = ({
  initVal,
  isEdit = false,
  removeAction,
  submitAction,
  placeHolder = "Microsoft... (07/2016-08/2020)",
}) => {
  const [disable, setDisable] = useState(isEdit ? false : true);
  const dispatch = useDispatch();

  const handleSubmit = ({ value }) => {
    submitAction(value);
    dispatch(disableEditSingleData());
  };
  const validatingForm = ({ value }) => {
    if (simpleVal(value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  const handleRemove = () => {
    if (isEdit) {
      dispatch(removeAction());
    } else {
    }
  };

  return (
    <div>
      <DefaultForm
        initialValues={initVal}
        onSubmit={handleSubmit}
        validate={validatingForm}
      >
        <div className="row">
          <div className="col-sm-10">
            <InputField name="value" placeholder={placeHolder} isRequired />
          </div>
          <SaveRemoveBtn remove={handleRemove} isDisabled={disable} />
        </div>
      </DefaultForm>
    </div>
  );
};

SingleInputForm.propTypes = {
  initVal: PropTypes.object.isRequired,
  isEdit: PropTypes.bool,
  removeAction: PropTypes.func,
  submitAction: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SingleInputForm;
