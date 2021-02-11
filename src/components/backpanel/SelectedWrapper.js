import React from "react";
import { useSelector } from "react-redux";

import AboutMeSection from "./AboutMeSection";
import PortfolioSection from "./PortfolioSection";
import ResumeSection from "./ResumeSection";

const SelectedWrapper = () => {
  // @ts-ignore
  const { currentSection } = useSelector((state) => state.ui);

  const getComponent = () => {
    switch (currentSection) {
      case "About Me":
        return <AboutMeSection />;
      case "Resume/CV":
        return <ResumeSection />;
      case "Portfolio":
        return <PortfolioSection />;
      default:
        return <AboutMeSection />;
    }
  };

  return <div className="selectedWrapper">{getComponent()}</div>;
};

export default SelectedWrapper;
