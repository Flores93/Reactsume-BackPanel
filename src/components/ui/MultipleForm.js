import React from "react";
import PropTypes from "prop-types";

import DividedInfoFormCore from "./DividedInfoFormCore";

const MultipleForm = ({ forms, setForms, label }) => {
  const addNewField = () => {
    setForms([...forms, { type: "", value: "", id: new Date().getTime() }]);
  };

  const removeField = (i) => {
    const arrayFilter = forms.filter(({ id }) => id !== i);

    setForms(arrayFilter);
  };

  return (
    <>
      <span onClick={addNewField} className="itsAPointer">
        <i className="fas green fa-plus-circle mr-2" />
        {label}
      </span>
      {forms.map(({ type, value, id }) => (
        <DividedInfoFormCore
          key={id}
          FormInitVal={{ type, value }}
          remove={() => removeField(id)}
        />
      ))}
    </>
  );
};

MultipleForm.propTypes = {
  forms: PropTypes.array,
  setForms: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default MultipleForm;
