import React, { useState } from "react";
import { useSelector } from "react-redux";

import AddNewElementHeaderSecondary from "../../ui/AddNewElementHeaderSecondary";
import CompanyDescsHandler from "../../ui/CompanyDescsHandler";
import ComponentMappingWrapper from "../../ui/ComponentMappingWrapper";
import ExperienceHandler from "../../ui/ExperienceHandler";
import HDivider from "../../ui/HDivider";
import NewExperienceForm from "../../ui/NewExperienceForm";

const Experiences = () => {
  const [forms, setForms] = useState([]);
  const { experiences } = useSelector((state) => state.resume);

  const addNewField = () => {
    setForms([
      ...forms,
      {
        company: "",
        charge: "",
        desc: "",
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

      {forms.map(({ company, charge, desc, id }) => (
        <div key={id}>
          <NewExperienceForm
            FormInitVal={{ company, charge, desc }}
            remove={() => removeField(id)}
          />
        </div>
      ))}

      <ComponentMappingWrapper exists={experiences}>
        {experiences.map(({ company, description, id }) => (
          <div key={id} className="textWhite text-center">
            <ExperienceHandler company={company} expId={id} />
            <CompanyDescsHandler data={description} expId={id} />
            <HDivider mb="10px" mt="10px" />
          </div>
        ))}
      </ComponentMappingWrapper>
    </>
  );
};

export default Experiences;
