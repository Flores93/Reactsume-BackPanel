import React from "react";
import { useSelector } from "react-redux";

import AddNewElementHeaderSecondary from "./../../../ui/AddNewElementHeaderSecondary";
import ComponentMappingWrapper from "../../../ui/ComponentMappingWrapper";
import EducationForm from "./EducationForm";

import { useFields } from "../../../../hooks/useFields";

const Education = () => {
  const { fields, addNewField, removeField } = useFields();
  const { education } = useSelector((state) => state.resume);
  const initData = { institution: "", subject: "", url: "" };

  return (
    <>
      <AddNewElementHeaderSecondary
        title="Education"
        addHandler={() => addNewField(initData)}
        label="Add new education"
      />

      {fields.map(({ id, institution, subject, url }) => (
        <EducationForm
          key={id}
          initVal={{ institution, subject, url }}
          remover={() => removeField(id)}
        />
      ))}
      <ComponentMappingWrapper exists={education}>
        {education.map((data) => (
          <div key={data.id}>{data.institution}</div> //demo
        ))}
      </ComponentMappingWrapper>
    </>
  );
};

export default Education;
