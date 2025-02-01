import ExperienceComponent from "../experience/ExperienceComponent";
import IntroductionComponent from "../introduction/IntroductionComponent";
import ProjectsComponent from "../projects/ProjectsComponent";
import SkillsComponent from "../skills/SkillsComponent";
import "./HomeComponent.scss";

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
