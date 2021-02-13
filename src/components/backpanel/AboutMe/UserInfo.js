import React, { useState } from "react";

import DividedInfoFormCore from "../../ui/DividedInfoFormCore";

const UserInfo = () => {
  const [forms, setForms] = useState([]);

  const addNewField = () => {
    setForms([...forms, { type: "", value: "", id: new Date().getTime() }]);
  };

  const removeField = (i) => {
    const arrayFilter = forms.filter(({ id }) => id !== i);

    setForms(arrayFilter);
  };

  return (
    <div className="mt-3">
      <h3>User info</h3>
      <span onClick={addNewField} className="itsAPointer">
        <i className="fas green fa-plus-circle mr-2" />
        Add info
      </span>
      {forms.map(({ type, value, id }) => (
        <DividedInfoFormCore
          key={id}
          FormInitVal={{ type, value }}
          remove={() => removeField(id)}
        />
      ))}
    </div>
  );
};

export default UserInfo;
