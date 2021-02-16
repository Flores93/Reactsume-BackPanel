import React, { useState } from "react";
import { useSelector } from "react-redux";

import SocialLinksFormCore from "../../ui/SocialLinksFormCore";
import HDivider from "../../ui/HDivider";
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
      <h3>Your social networks</h3>
      <span onClick={addNewField} className="itsAPointer">
        <i className="fas green fa-plus-circle mr-2" />
        Add network
      </span>
      {socialsFields.map(({ net, link, id }) => (
        <SocialLinksFormCore
          key={id}
          FormInitVal={{ net, link }}
          remove={() => removeField(id)}
        />
      ))}
      {socials.length > 0 && (
        <div className="container row">
          <HDivider mt="15px" mb="15px" />
          {socials.map(({ net, link, id }) => (
            <IndividualSocial key={id} net={net} link={link} id={id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Socials;
