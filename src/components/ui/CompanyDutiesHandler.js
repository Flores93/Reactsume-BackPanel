import React, { useState } from "react";

import AddNewElementHeaderSecondary from "./AddNewElementHeaderSecondary";

import { useForm } from "../../hooks/useForm";

const CompanyDutiesHandler = ({ setDuty, initState }) => {
  const [field, setField] = useState([]);

  const addNewDuty = () =>
    setField([...field, { charge: "", desc: "", id: new Date().getTime() }]);

  const removeDuty = (dutyId) =>
    setField(field.filter(({ id }) => id !== dutyId));

  return (
    <div className="container mb-3">
      <AddNewElementHeaderSecondary
        addHandler={addNewDuty}
        label="Add new duty on this company"
      />
    </div>
  );
};

export default CompanyDutiesHandler;
