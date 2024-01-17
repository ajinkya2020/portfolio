import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/home/HomeComponent';
import HeaderComponent from './components/header/HeaderComponent';
import SkillsComponent from './components/skills/SkillsComponent';
import ProjectsComponent from './components/projects/ProjectsComponent';

function App() {
  return (
    <div className="App px-16 py-10">
      <HeaderComponent></HeaderComponent>
      <HomeComponent></HomeComponent>
      <SkillsComponent></SkillsComponent>
      <ProjectsComponent></ProjectsComponent>
    </div>
  );
}

export default App;
