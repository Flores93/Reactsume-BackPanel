import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Field } from "formik";

import DefaultForm from "./DefaultForm";
import InputField from "./InputField";
import SaveRemoveBtn from "./SaveRemoveBtn";

import { savingNewSocialNet } from "../../actions/aboutmeActions";

import { simpleVal } from "../../helpers/validation";
import { socialNetworks } from "../../constants/socialNetworks";

const SocialLinksFormCore = ({ FormInitVal, remove }) => {
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(savingNewSocialNet(values));
    remove();
  };
  const validatingForm = ({ link, net }) => {
    if (simpleVal(link) && simpleVal(net)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <DefaultForm
      initialValues={FormInitVal}
      onSubmit={handleSubmit}
      validate={validatingForm}
    >
      <div className="container mt-4">
        <div className="row">
          <div className="col-5">
            <Field
              name="net"
              className="form-control"
              component="select"
              required={true}
            >
              <option>Select a Social Network</option>
              {socialNetworks.map(({ name, icon }) => (
                <option key={icon} value={icon}>
                  {name}
                </option>
              ))}
            </Field>
          </div>
          <div className="col-5">
            <InputField
              name="link"
              placeholder="https://linkedin.com/yourprofile"
              isRequired
            />
          </div>
          <SaveRemoveBtn isDisabled={disable} remove={remove} />
        </div>
      </div>
    </DefaultForm>
  );
};

SocialLinksFormCore.propTypes = {
  FormInitVal: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
};

export default SocialLinksFormCore;
