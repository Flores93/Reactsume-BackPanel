import React, { useState } from "react";
import ChipsFormCore from "../../ui/ChipsFormCore";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);

  const addNewField = () => {
    setHobbies([
      ...hobbies,
      { icon: "", label: "", color: "", id: new Date().getTime() },
    ]);
  };

  const removeField = (i) => {
    const arrayFilter = hobbies.filter(({ id }) => id !== i);

    setHobbies(arrayFilter);
  };

  return (
    <div className="mt-3">
      <h3>Hobbies</h3>
      <span onClick={addNewField} className="itsAPointer">
        <i className="fas green fa-plus-circle mr-1" />
        Add a new hobby
      </span>
      {hobbies.map(({ icon, label, color, id }) => (
        <ChipsFormCore
          key={id}
          FormInitVal={{ icon, label, color }}
          remove={() => removeField(id)}
        />
      ))}
    </div>
  );
};

export default Hobbies;
