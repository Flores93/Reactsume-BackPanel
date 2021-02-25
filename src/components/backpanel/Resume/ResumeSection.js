import React from "react";

import Education from "./Education";
import Experiences from "./Experiences";
import HDivider from "../../ui/HDivider";

const ResumeSection = () => {
  return (
    <>
      <h3>Resume</h3>
      <HDivider mb="15px" />

      <Experiences />

      <HDivider mb="15px" mt="15px" />
      <Education />
    </>
  );
};

export default ResumeSection;
