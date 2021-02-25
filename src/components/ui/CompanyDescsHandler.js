import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import AddNewElementHeaderSecondary from "./AddNewElementHeaderSecondary";
import DefaultForm from "./DefaultForm";
import EditButton from "./EditButton";
import SaveRemoveBtn from "./SaveRemoveBtn";
import InputField from "./InputField";

import {
  addingNewCompanyDuty,
  deletingExpDuty,
  updatingExpDuty,
} from "../../actions/resumeActions";
import { disableEditDivData, isEditDivData } from "../../actions/uiActions";

import { simpleVal } from "../../helpers/validation";

const CompanyDescsHandler = ({ data, expId }) => {
  const [fields, setFields] = useState([]);
  const [showAddBtn, setShowAddBtn] = useState(true);
  const dispatch = useDispatch();
  const { activeEditDividedData } = useSelector((state) => state.ui);

  const handleEdit = (id) => {
    dispatch(isEditDivData(id));
  };

  const addNewField = () => {
    setFields([
      ...fields,
      { charge: "", desc: "", idDesc: new Date().getTime() },
    ]);
    setShowAddBtn(false);
  };

  const FieldsComponent = ({ charge, desc, idDesc, isUpdate = false }) => {
    const [disable, setDisable] = useState(isUpdate ? false : true);

    const handleSubmit = ({ charge, desc }) => {
      if (isUpdate) {
        dispatch(updatingExpDuty({ charge, desc, idDesc, expId }));
        dispatch(disableEditDivData());
      } else {
        dispatch(addingNewCompanyDuty({ charge, desc, idDesc, expId }));
        setShowAddBtn(true);
        handleRemove();
      }
    };

    const validatingForm = ({ charge, desc }) => {
      if (simpleVal(charge) && simpleVal(desc)) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    };

    const handleRemove = () => {
      if (isUpdate) {
        dispatch(deletingExpDuty({ idDesc, expId }));
        dispatch(disableEditDivData());
      } else {
        setFields(fields.filter((data) => data.idDesc !== idDesc));
        setShowAddBtn(true);
      }
    };

    return (
      <DefaultForm
        initialValues={{ charge, desc, idDesc }}
        onSubmit={handleSubmit}
        validate={validatingForm}
      >
        <div className="row">
          <div className="col-sm-5">
            <InputField name="charge" placeholder="Developer..." isRequired />
          </div>
          <div className="col-sm-5">
            <InputField
              name="desc"
              placeholder="Creation of several web pages..."
              isRequired
            />
          </div>
          <SaveRemoveBtn remove={handleRemove} isDisabled={disable} />
        </div>
      </DefaultForm>
    );
  };

  const DutyDataViewer = ({ charge, desc, idDesc }) => (
    <div className="row">
      <div className="col-5 textEnd">
        <b>{charge}</b>
      </div>
      <div className="col-5 textStart">{desc}</div>
      <div className="col-2">
        <EditButton onClick={() => handleEdit(idDesc)} />
      </div>
    </div>
  );

  return (
    <>
      {data.map((data) => (
        <div key={data.idDesc}>
          {activeEditDividedData === data.idDesc ? (
            <FieldsComponent {...data} isUpdate />
          ) : (
            <DutyDataViewer {...data} />
          )}
        </div>
      ))}
      {showAddBtn && (
        <AddNewElementHeaderSecondary
          addHandler={addNewField}
          label="Add new Duty"
        />
      )}
      {fields.map((data) => (
        <FieldsComponent key={data.idDesc} {...data} />
      ))}
    </>
  );
};

CompanyDescsHandler.propTypes = {
  data: PropTypes.array.isRequired,
  expId: PropTypes.any.isRequired,
};

export default CompanyDescsHandler;
