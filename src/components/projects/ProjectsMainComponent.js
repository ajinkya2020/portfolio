import React from 'react'
import './ProjectsComponent.css'
import { ProjectSkill } from './ProjectsComponent'
import { PROJECT_LIST } from './projects.constants.ts'

function ProjectsMainComponent() {
  return (
    <>
      {PROJECT_LIST.map((project, index) => (
        <ProjectCardMainComponent key={index} {...project}></ProjectCardMainComponent>
      ))}
    </>
  )
}

function ProjectCardMainComponent(props) {
  return (
    <div className='project-desc-container bg-gray-500 block md:flex lg:flex mx-auto p-10 mt-5 rounded-lg'>
      <img className='projectImage rounded-lg' src={props.image} alt="linkedIn"/>
      <div className="divider-vertical mx-5"></div>
      <div className='w-full md:w-3/4 lg:w-3/4 text-left ms-5'>
        <div>{props.projectTitle}</div>
        <div className='mt-3'>
          {props.skills.map((skill, index) => (
            <span className={index !== 0 ? 'ms-3' : ''}>
              <ProjectSkill key={index} skill={skill}></ProjectSkill>
            </span>
          ))}
        </div>
        <div className='experience-achievements text-gray-400 mt-3'>
          {/* <ul>
            {props.descList.map((desc, index) => (
              <li key={index}>                
                {desc.split("**").map((part, i) =>
                  i % 2 === 0 ? (
                    part
                  ) : (
                    <strong key={i}>{part}</strong>
                  )
                )}
              </li>
            ))}
          </ul> */}
          {props.desc}
        </div>
        <button className={!props.projectLink ? 'mt-10 me-3 cursor-not-allowed' : 'mt-10 me-3'}><a href={props.projectLink} target="_blank" rel='noopener noreferrer'>Live Preview</a></button>
        <button className={!props.sourceCodeLink ? 'mt-5 cursor-not-allowed' : 'mt-5'}><a href={props.sourceCodeLink} target="_blank" rel='noopener noreferrer'>Source Code</a></button>
      </div>
    </div>
  )
}

export default ProjectsMainComponent