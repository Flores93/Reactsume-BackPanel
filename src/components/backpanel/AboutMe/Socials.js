import React, { useState } from "react";

import SocialLinksFormCore from "../../ui/SocialLinksFormCore";

const Socials = () => {
  const [socials, setSocials] = useState([]);

  const addNewField = () => {
    setSocials([...socials, { net: "", link: "", id: new Date().getTime() }]);
  };

  const removeField = (i) => {
    const arrayFilter = socials.filter(({ id }) => id !== i);

    setSocials(arrayFilter);
  };

  return (
    <div className="mt-3">
      <h3>Your social networks</h3>
      <span onClick={addNewField} className="itsAPointer">
        <i className="fas green fa-plus-circle mr-2" />
        Add network
      </span>
      {socials.map(({ net, link, id }) => (
        <SocialLinksFormCore
          key={id}
          FormInitVal={{ net, link }}
          remove={() => removeField(id)}
        />
      ))}
    </div>
  );
};

export default Socials;
