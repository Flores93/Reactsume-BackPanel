import React from "react";
import { useSelector } from "react-redux";

import { DescriptionInputs, DescriptionReadOnly } from "./DescriptionContent";

const Description = () => {
  const { displayName, profession, description } = useSelector(
    (state) => state.aboutMe
  );

  return (
    <>
      {displayName && profession && description ? (
        <DescriptionInputs />
      ) : (
        <DescriptionReadOnly />
      )}
    </>
  );
};

export default Description;
