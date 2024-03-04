import React from 'react'
import TitleComponent from '../shared/TitleComponent'
import './ProjectsComponent.css'
import { PROJECT_LIST } from './projects.constants.ts'

function ProjectsComponent() {
  return (
    <div className='projects-container mt-20 py-5'>
      <TitleComponent title={'FEATURED PROJECTS'}></TitleComponent>
      <div>Explore my projects and witness the fusion of technology and genius.</div>
      <div className='flex flex-wrap justify-center'>
        {PROJECT_LIST.map((skill, index) => (
          <ProjectCardComponent key={index} cardImage={skill.image} title={skill.title} desc={skill.desc} skills={skill.skills} projectLink={skill.projectLink} sourceCodeLink={skill.sourceCodeLink}></ProjectCardComponent>
        ))}
      </div>
    </div>
  )
}

function ProjectCardComponent(props) {
  return (
    <div className='project-card-container m-10'>
      <div className="flip-card-inner rounded-lg">
        <div className="flip-card-front rounded-lg">
          <div>
            <img className='projectImage rounded-lg' src={props.cardImage} alt="linkedIn"/>
            <div className='mt-3 font-bold'>{props.title}</div>
            <div className='mt-3'>
              {props.skills.map((skill, index) => (
                <span className={index !== 0 ? 'ms-3' : ''}>
                  <ProjectSkill key={index} skill={skill}></ProjectSkill>
                </span>
              ))}
            </div>
          </div>
          <div className='mt-3 text-gray-400'>{props.desc}</div>
        </div>
        <div className="flip-card-back py-40 px-28 rounded-lg">
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

export function ProjectSkill(props) {
  return (
    <span className='bg-gray-600 font-bold text-sm whitespace-nowrap rounded-xl py-1 px-2'>{props.skill}</span>
  )
}

export default ProjectsComponent