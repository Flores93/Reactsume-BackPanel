import React, { useState } from "react";

import MultipleForm from "../../ui/MultipleForm";

const UserInfo = () => {
  const [forms, setForms] = useState([]);

  return (
    <div className="mt-3">
      <h3>User info</h3>
      <MultipleForm forms={forms} setForms={setForms} label="Add info" />
    </div>
  );
};

export default UserInfo;
