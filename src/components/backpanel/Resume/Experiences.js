import React, { useState } from "react";

import AddNewElementHeaderSecondary from "../../ui/AddNewElementHeaderSecondary";
import NewExperienceForm from "../../ui/NewExperienceForm";

const Experiences = () => {
  const [forms, setForms] = useState([]);

  const addNewField = () => {
    setForms([
      ...forms,
      {
        company: "",
        description: [],
        id: new Date().getTime(),
      },
    ]);
  };

  const removeField = (elementId) => {
    const arrayFilter = forms.filter(({ id }) => id !== elementId);
    setForms(arrayFilter);
  };

  return (
    <>
      <AddNewElementHeaderSecondary
        title="Experiences"
        addHandler={addNewField}
        label="Add new experience"
      />
      {forms.map(({ company, description, id }) => (
        <NewExperienceForm
          key={id}
          FormInitVal={{ company, description }}
          description={description}
          handlerDuties={setForms}
          remove={() => removeField(id)}
        />
      ))}
    </>
  );
};

export default Experiences;
