import React from "react";
import "./HomeComponent.css";
import SkillsComponent from "../skills/SkillsComponent";
import ProjectsComponent from "../projects/ProjectsComponent";
import IntroductionComponent from "../introduction/IntroductionComponent";
import ExperienceComponent from "../experience/ExperienceComponent";

function HomeComponent() {
  return (
    <div className="home-container mt-20">
      <IntroductionComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <ExperienceComponent />
    </div>
  );
}

export default HomeComponent;
