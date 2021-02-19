import React, { useState } from "react";
import { useSelector } from "react-redux";

import AddNewElementHeaderSecondary from "../../ui/AddNewElementHeaderSecondary";
import ComponentMappingWrapper from "../../ui/ComponentMappingWrapper";
import DividedData from "../../ui/DividedData";
import DividedInfoFormCore from "../../ui/DividedInfoFormCore";

const UserInfo = () => {
  const [forms, setForms] = useState([]);
  const { infos } = useSelector((state) => state.aboutMe);

  const addNewField = () => {
    setForms([...forms, { type: "", value: "", id: new Date().getTime() }]);
  };

  const removeField = (i) => {
    const arrayFilter = forms.filter(({ id }) => id !== i);

    setForms(arrayFilter);
  };

  return (
    <div className="mt-3">
      <AddNewElementHeaderSecondary
        title="User info"
        addHandler={addNewField}
        label="Add info"
      />

      {forms.map(({ type, value, id }) => (
        <DividedInfoFormCore
          key={id}
          FormInitVal={{ type, value }}
          remove={() => removeField(id)}
        />
      ))}
      <ComponentMappingWrapper exists={infos}>
        {infos.map(({ type, value, id }) => (
          <DividedData key={id} type={type} val={value} id={id} />
        ))}
      </ComponentMappingWrapper>
    </div>
  );
};

export default UserInfo;
