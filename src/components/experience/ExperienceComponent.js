import React from 'react'
import './ExperienceComponent.css'
import TitleComponent from '../shared/TitleComponent'

let experienceList = [
  {
    companyName: 'Datametica Private Limited',
    duration: 'Oct 2021 - Present',
    location: 'Pune',
    role: 'Associate Software Engineer III',
    achievementList: [
      'Guiding and mentoring the UI team for a product.',
      'Implemented access control across the application by introducing roles and workspaces.',
      'Enhanced API Performance: Achieved a 70% reduction in call time through query optimization.',
      'Implemented Common Table Component to streamline development processes and minimize code length.',
      'Implemented State Management to achieve an 80-90% reduction in page load time.',
      'Developing stunning visual components for web apps by converting UI/UX design wireframes into code and creating excellent, reusable markup using Angular.',
      'Got awarded with The Rising Star Award, two years in a row.'
    ]
  },
  {
    companyName: 'Allsoft Solutions Private Limited',
    duration: 'Jul 2021 - Sep 2021',
    location: 'Pune',
    role: 'Artificial Intelligence Intern',
    achievementList: [
      'Worked on various IBM Services. Watson Assistant, Watson Language Translator, Watson Discovery, Watson Knowledge Studio to name a few.',
      'Learning different Supervised and Unsupervised Machine Learning Algorithms to improve accuracy of the models',
      'Working on a project using Watson Speech to text service and Node.js as back-end for converting the audio input coming from a microphone and displaying the corresponding text output on the web app'
    ]
  }
]

function ExperienceComponent() {
  return (
    <div className='experience-main-container py-5'>
      <TitleComponent title={'EXPERIENCE'}></TitleComponent>
      <div>Exploring Expertise, Embracing Excellence</div>
      <div className='mt-10'>
        {experienceList.map((experience, index) => (
          <DescExperienceComponent
            key={index}
            companyName={experience.companyName}
            duration={experience.duration}
            location={experience.location}
            role={experience.role}
            achievementList={experience.achievementList}
          ></DescExperienceComponent>
        ))}
      </div>
    </div>
  )
}

function DescExperienceComponent(props) {
  return (
    <div className='desc-experience flex mx-auto p-5 mt-5'>
      <div className='text-left px-5 w-2/5'>
        <span className='block text-yellow-600'>{props.companyName}</span>
        <div className='text-sm'>{props.duration}</div>
        <span className='text-gray-400'>{props.location}</span>
      </div>
      <div className="divider-vertical me-3"></div>
      <div className='text-left ms-5'>
        <div>{props.role}</div>
        <div className='experience-achievements text-gray-400 mt-3'>
          <ul>
            {props.achievementList.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperienceComponent