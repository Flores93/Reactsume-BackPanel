import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import EducationForm from "./EducationForm";
import EditButton from "../../../ui/EditButton";

import {
  disableEditDivData,
  isEditDivData,
} from "../../../../actions/uiActions";
import {
  deletingEducation,
  updatingEducation,
} from "../../../../actions/resumeActions";

const EducationViewer = ({ data }) => {
  const dispatch = useDispatch();
  const { activeEditDividedData } = useSelector((state) => state.ui);

  const handleEdit = (id) => {
    dispatch(isEditDivData(id));
  };

  const removeAction = (update = false) => {
    if (update) {
      dispatch(disableEditDivData());
    } else {
      dispatch(deletingEducation());
    }
  };

  return data.map(({ institution, subject, url, id }) =>
    activeEditDividedData === id ? (
      <EducationForm
        key={id}
        initVal={{ institution, subject, url }}
        remover={removeAction}
        submitAct={updatingEducation}
        isUpdate
      />
    ) : (
      <div className="row" key={id}>
        <div className="col-5 textEnd">
          <span>
            <b>{institution}</b>
          </span>
        </div>
        <div className="col-5 textStart">
          {!!url ? (
            <a href={url} target="_blank" rel="noreferrer">
              {subject}
            </a>
          ) : (
            <p>{subject}</p>
          )}
        </div>
        <div className="col-2">
          <EditButton onClick={() => handleEdit(id)} />
        </div>
      </div>
    )
  );
};

EducationViewer.propTypes = {
  data: PropTypes.array.isRequired,
};

export default EducationViewer;
