import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Switch } from "react-router-dom";

import AboutMeSection from "../components/backpanel/AboutMe/AboutMeSection";
import ResumeSection from "../components/backpanel/ResumeSection";
import PortfolioSection from "../components/backpanel/PortfolioSection";

import PrivateRoutes from "./PrivateRoutes";

const PanelRoutes = () => {
  const { userName } = useSelector((state) => state.auth);

  return (
    <Switch>
      <PrivateRoutes
        isLoggedIn={userName}
        exact
        path="/panel/resume"
        component={ResumeSection}
      />
      <PrivateRoutes
        isLoggedIn={userName}
        exact
        path="/panel/portfolio"
        component={PortfolioSection}
      />
      <PrivateRoutes
        isLoggedIn={userName}
        exact
        path="/panel/aboutme"
        component={AboutMeSection}
      />

      <Redirect to="/panel/aboutme" />
    </Switch>
  );
};

export default PanelRoutes;
