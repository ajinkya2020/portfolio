import TitleComponent from '../shared/TitleComponent';
import './ExperienceComponent.scss';

let experienceList = [
  {
    companyName: 'Datametica Private Limited',
    duration: 'Oct 2021 - Present',
    location: 'Pune',
    role: 'Associate Software Engineer III',
    achievementList: [
      'Got awarded with **The Rising Star Award**, two years in a row.',
      'Guiding and mentoring the UI team for a product.',
      'Implemented access control across the application by introducing roles and workspaces.',
      'Enhanced Backend API Performance: Achieved a **70% reduction** in call time through query optimization.',
      'Implemented **Common Table Component** to streamline development processes and minimize code length.',
      'Implemented State Management to achieve an **80-90% reduction** in page load time.',
      'Developing stunning visual components for web apps by converting UI/UX design wireframes into code and creating excellent, reusable markup using Angular.'
    ]
  },
  {
    companyName: 'Allsoft Solutions Private Limited',
    duration: 'Jul 2021 - Sep 2021',
    location: 'Pune',
    role: 'Intern',
    achievementList: [
      'Worked on various IBM Services. Watson Assistant, Watson Language Translator, Watson Discovery, Watson Knowledge Studio to name a few.',
      'Learned about various Supervised and Unsupervised Machine Learning Algorithms to improve accuracy of the models.',
      'Worked on a project using Watson Speech to text service and Node.js as back-end for converting the audio input coming from a microphone and displaying the corresponding text output on the web app.'
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

interface DescExperienceComponentProps {
  companyName: string;
  duration: string;
  location: string;
  role: string;
  achievementList: string[]
}

function DescExperienceComponent(props: DescExperienceComponentProps) {
  return (
    <div className='desc-experience block md:flex lg:flex mx-auto p-10 mt-5 rounded-lg'>
      <div className='w-full md:w-1/4 lg:w-1/4 text-left px-5'>
        <span className='block text-yellow-600'>{props.companyName}</span>
        <div className='text-sm'>{props.duration}</div>
        <span className='text-gray-400'>{props.location}</span>
      </div>
      <div className="divider-vertical me-3"></div>
      <div className='w-full md:w-3/4 lg:w-3/4 text-left ms-5'>
        <div>{props.role}</div>
        <div className='experience-achievements text-gray-400 mt-3'>
          <ul>
            {props.achievementList.map((achievement, index) => (
              <li key={index}>                
                {achievement.split("**").map((part, i) =>
                  i % 2 === 0 ? (
                    part
                  ) : (
                    <strong key={i}>{part}</strong>
                  )
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperienceComponent