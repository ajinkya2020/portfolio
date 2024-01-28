import React from 'react'
import TitleComponent from '../shared/TitleComponent'
import './ProjectsComponent.css'

let projectList = [
  {
    title: "COVID-19 Tracker",
    image: './covid19Tracker.png',
    desc: "A comprehensive COVID-19 Tracker, meticulously designed to provide real-time updates on global and country-specific cases. Stay informed on cases, recoveries, and losses.",
    skills: ['React', 'react-chartjs-2', 'disease.sh'],
    projectLink: "https://covid19tracker-e2bcf.web.app/",
    sourceCodeLink: "https://github.com/ajinkya2020/Covid-19-Tracker"
  },
  {
    title: "Capsule Wars",
    image: './capsuleWars.png',
    desc: "Dive into the action-packed world of Capsule Wars, an adrenaline-fueled FPS game where players, embodying capsule-shaped warriors fight to win. Engage in fast-paced multiplayer battles, strategize, and emerge victorious.",
    skills: ['C#', 'Unity Engine', 'Photon'],
    sourceCodeLink: "https://github.com/ajinkya2020/Capsule-Wars"
  },
  {
    title: "ng-godspeed-transfer (npm package)",
    image: './ngGodspeedTransfer.png',
    desc: 'Angular component for effortless item transfer between two lists, optimizing your workflow with seamless and intuitive functionality.',
    skills: ['Typescript', 'Angular'],
    projectLink: "https://www.npmjs.com/package/ng-godspeed-transfer",
    sourceCodeLink: "https://github.com/ajinkya2020/ng-godspeed"
  },
  {
    title: "The Social Scoop",
    image: './socialScoop.png',
    desc: 'Social Scoop is a unique social media platform that celebrates the beauty of real-life moments.',
    skills: ['Javascript', 'React', 'Firebase'],
    projectLink: "https://social-scoop.web.app/",
    sourceCodeLink: "https://github.com/ajinkya2020/The-Social-Scoop"
  }
]

function ProjectsComponent() {
  return (
    <div className='projects-container mt-20 py-5'>
      <TitleComponent title={'FEATURED PROJECTS'}></TitleComponent>
      <div>Explore my projects and witness the fusion of technology and genius.</div>
      <div className='flex flex-wrap justify-center'>
        {projectList.map((skill, index) => (
          <ProjectCardComponent key={index} cardImage={skill.image} title={skill.title} desc={skill.desc} skills={skill.skills} projectLink={skill.projectLink} sourceCodeLink={skill.sourceCodeLink}></ProjectCardComponent>
        ))}
      </div>
    </div>
  )
}

function ProjectCardComponent(props) {
  return (
    <div className='project-card-container m-10'>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div>
            <img className='projectImage' src={props.cardImage} alt="linkedIn"/>
            <div className='mt-3 font-bold'>{props.title}</div>
            <div className='mt-3'>
              {props.skills.map((skill, index) => (
                <ProjectSkill key={index} skill={skill}></ProjectSkill>
              ))}
            </div>
          </div>
          <div className='mt-3 text-gray-400'>{props.desc}</div>
        </div>
        <div className="flip-card-back py-40 px-28">
          <div>
            <div className='font-bold'>{props.title}</div>
            <button className={!props.projectLink ? 'mt-10 cursor-not-allowed' : 'mt-10'}><a href={props.projectLink} target="_blank" rel='noopener noreferrer'>Live Preview</a></button>
            <button className={!props.sourceCodeLink ? 'mt-5 cursor-not-allowed' : 'mt-5'}><a href={props.sourceCodeLink} target="_blank" rel='noopener noreferrer'>Source Code</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectSkill(props) {
  return (
    <span className='bg-white text-black font-bold text-sm whitespace-nowrap rounded-xl py-1 px-2 ms-3'>{props.skill}</span>
  )
}

export default ProjectsComponent