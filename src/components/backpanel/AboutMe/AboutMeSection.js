import React from "react";

import Description from "./Description";

import HDivider from "../../ui/HDivider";
import UserInfo from "./UserInfo";
import Socials from "./Socials";
import Hobbies from "./Hobbies";

const AboutMeSection = () => {
  return (
    <>
      <h3>About Me</h3>
      <HDivider />
      <Description />

      <HDivider mt="30px" />
      <UserInfo />

      <HDivider mt="30px" />
      <Socials />

      <HDivider mt="30px" />
      <Hobbies />
    </>
  );
};

export default AboutMeSection;
