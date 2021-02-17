import React, { useState } from "react";
import { useSelector } from "react-redux";

import ChipsFormCore from "../../ui/ChipsFormCore";
import HDivider from "../../ui/HDivider";
import ShowChip from "../../ui/ShowChip";

const Hobbies = () => {
  const [hobbiesFields, setHobbiesFields] = useState([]);
  const { hobbies } = useSelector((state) => state.aboutMe);

  const addNewField = () => {
    setHobbiesFields([
      ...hobbiesFields,
      { icon: "", label: "", bgColor: "", id: new Date().getTime() },
    ]);
  };

  const removeField = (i) => {
    const arrayFilter = hobbiesFields.filter(({ id }) => id !== i);

    setHobbiesFields(arrayFilter);
  };

  return (
    <div className="mt-3">
      <h3>Hobbies</h3>
      <span onClick={addNewField} className="itsAPointer textStart">
        <i className="fas green fa-plus-circle mr-1" />
        Add a new hobby
      </span>
      <a
        href="https://fontawesome.com/icons?d=gallery"
        target="_blank"
        rel="noreferrer"
        className="textEnd navLink"
      >
        <small className="alertRed textWhite">
          Get Icons <i className="fas fa-arrow-right"></i>
        </small>
      </a>
      {hobbiesFields.map(({ icon, label, bgColor, id }) => (
        <ChipsFormCore
          key={id}
          FormInitVal={{ icon, label, bgColor }}
          remove={() => removeField(id)}
        />
      ))}
      {hobbies.length > 0 && (
        <div className="container row">
          <HDivider mt="15px" mb="15px" />
          {hobbies.map((hobbie) => (
            <ShowChip key={hobbie.id} {...hobbie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hobbies;
