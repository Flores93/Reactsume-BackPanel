import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import EditButton from "./EditButton";
import SingleInputForm from "./SingleInputForm";

import {
  deletingExperience,
  updatingCompanyName,
} from "../../actions/resumeActions";
import { isEditSingleData } from "./../../actions/uiActions";

const ExperienceHandler = ({ company, expId }) => {
  const dispatch = useDispatch();
  const { activeEditSingleData } = useSelector((state) => state.ui);

  const handleEdit = () => {
    dispatch(isEditSingleData(expId));
  };

  const handleSubmitSingleInput = (value) => {
    dispatch(updatingCompanyName(value));
  };

  return (
    <>
      {activeEditSingleData === expId ? (
        <SingleInputForm
          initVal={{ value: company }}
          removeAction={() => deletingExperience(expId)}
          isEdit
          submitAction={handleSubmitSingleInput}
        />
      ) : (
        <div className="row">
          <div className="col-10">
            <h3>{company}</h3>
          </div>
          <div className="col-2">
            <EditButton onClick={handleEdit} />
          </div>
        </div>
      )}
    </>
  );
};

ExperienceHandler.propTypes = {
  company: PropTypes.string.isRequired,
  expId: PropTypes.number.isRequired,
};

export default ExperienceHandler;
