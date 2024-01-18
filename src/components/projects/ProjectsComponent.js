import React from 'react'
import './ProjectsComponent.css'

let projectList = [
  {
    title: "Social Scoop",
    image: './socialScoop.png',
    desc: 'Skilled in Angular, React, Node.js, and Express.js. Expertise in crafting dynamic and scalable web solutions. Proven track record in building robust SPAs and efficient UIs.'
  },
  {
    title: "Covid 19 Tracker",
    image: './covid19Tracker.png',
    desc: 'Versatile in Unity Engine, Skilled in creating captivating gaming experiences, implementing gameplay mechanics'
  },
  {
    title: "Capsule Wars",
    image: './capsuleWars.png',
    desc: 'Versatile UI/UX designer with a keen eye for creating visually appealing and user-centric digital experiences.'
  },
]

function ProjectsComponent() {
  return (
    <div className='projects-container mt-20 py-5'>
      <div className="font-bold text-yellow-600 introduction-title">FEATURED PROJECTS</div>
      <div className='flex flex-wrap justify-center'>
        {projectList.map((skill, index) => (
          <ProjectCardComponent key={index} cardImage={skill.image} title={skill.title} desc={skill.desc}></ProjectCardComponent>
        ))}
      </div>
    </div>
  )
}

function ProjectCardComponent(props) {
  return (
    <div className='card-container m-5 block p-20'>
      <img className='projectImage' src={props.cardImage} alt="linkedIn"/>
      <div className='mt-3 font-bold'>{props.title}</div>
      <div className='mt-3 text-gray-400'>{props.desc}</div>
    </div>
  )
}

export default ProjectsComponent