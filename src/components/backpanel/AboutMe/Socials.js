import React, { useState } from "react";
import { useSelector } from "react-redux";

import AddNewElementHeaderSecondary from "../../ui/AddNewElementHeaderSecondary";
import ComponentMappingWrapper from "../../ui/ComponentMappingWrapper";
import SocialLinksFormCore from "../../ui/SocialLinksFormCore";
import IndividualSocial from "../../ui/IndividualSocial";

const Socials = () => {
  const { socials } = useSelector((state) => state.aboutMe);
  const [socialsFields, setSocialsFields] = useState([]);

  const addNewField = () => {
    setSocialsFields([
      ...socialsFields,
      { net: "", link: "", id: new Date().getTime() },
    ]);
  };

  const removeField = (i) => {
    const arrayFilter = socialsFields.filter(({ id }) => id !== i);

    setSocialsFields(arrayFilter);
  };

  return (
    <div className="mt-3">
      <AddNewElementHeaderSecondary
        title="Your social networks"
        addHandler={addNewField}
        label="Add network"
      />
      {socialsFields.map(({ net, link, id }) => (
        <SocialLinksFormCore
          key={id}
          FormInitVal={{ net, link }}
          remove={() => removeField(id)}
        />
      ))}
      <ComponentMappingWrapper exists={socials}>
        {socials.map(({ net, link, id }) => (
          <IndividualSocial key={id} net={net} link={link} id={id} />
        ))}
      </ComponentMappingWrapper>
    </div>
  );
};

export default Socials;
