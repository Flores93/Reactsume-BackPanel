import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import DividedInfoFormCore from "./DividedInfoFormCore";

import { deletingInfo } from "../../actions/aboutmeActions";
import { isEditDivData } from "../../actions/uiActions";

const DividedData = ({ type, val, url = "", id }) => {
  const { activeEditDividedData } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(isEditDivData(id));
  };

  const handleDelete = () => {
    dispatch(deletingInfo(id));
  };

  return (
    <div
      onDoubleClick={handleEdit}
      className="row container textWhite itsAPointer noSelect"
    >
      {activeEditDividedData !== id ? (
        <>
          <div className="col-6 textEnd">
            <span>
              <b>{type}</b>
            </span>
          </div>
          <div className="col-6 textStart">
            {!!url ? (
              <a href={url} target="_blank" rel="noreferrer">
                {val}
              </a>
            ) : (
              <p>{val}</p>
            )}
          </div>
        </>
      ) : (
        <div className="container col-12">
          <DividedInfoFormCore
            FormInitVal={{ type, value: val }}
            remove={handleDelete}
            itsUpdate
          />
        </div>
      )}
    </div>
  );
};

DividedData.propTypes = {
  type: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  url: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default DividedData;
