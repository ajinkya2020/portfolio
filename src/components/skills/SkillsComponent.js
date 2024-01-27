import { React, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGamepad, faPenNib } from '@fortawesome/free-solid-svg-icons'
import './SkillsComponent.css'

let skillCardIcons = {
  webDev: 'webDev',
  gameDev: 'gameDev',
  uiUxDesign: 'uiUx'
}

let skillCardList = [
  {
    title: "Web Development",
    icon: skillCardIcons.webDev,
    desc: 'Skilled in Angular, React, Node.js, and Express.js. Expertise in crafting dynamic and scalable web solutions. Proven track record in building robust SPAs and efficient UIs.'
  },
  {
    title: "Game Development",
    icon: skillCardIcons.gameDev,
    desc: 'Versatile in Unity Engine, Skilled in creating captivating gaming experiences, implementing gameplay mechanics'
  },
  {
    title: "UI/UX Design",
    icon: skillCardIcons.uiUxDesign,
    desc: 'Versatile UI/UX designer with a keen eye for creating visually appealing and user-centric digital experiences.'
  },
]


function SkillsComponent() {
  return (
    <div className='skills-container mt-20 py-5'>
      <div className='flex justify-center py-5'>
        <ExperienceInfo value='2+' desc='Years Experience'></ExperienceInfo>
        <div className="divider-vertical mx-10"></div>
        <ExperienceInfo value='3' desc='Achievements'></ExperienceInfo>
      </div>
      <div className='flex flex-wrap justify-center'>
        {skillCardList.map((skill, index) => (
          <SkillCardComponent key={index} cardIcon={skill.icon} title={skill.title} desc={skill.desc}></SkillCardComponent>
        ))}
      </div>
    </div>
  )
}

function SkillCardComponent(props) {
  const [cardIcon, setCardIcon] = useState(faCode);
  
  useEffect(() => {
    switch (props.cardIcon) {
      case skillCardIcons.webDev:
        setCardIcon(faCode);
        break;
      case skillCardIcons.gameDev:
        setCardIcon(faGamepad);
        break;
      case skillCardIcons.uiUxDesign:
        setCardIcon(faPenNib);
        break;
      default:
        setCardIcon(faCode);
    }
  }, [props.cardIcon]);

  return (
    <div className='card-container m-5 block p-20'>
      <FontAwesomeIcon size='5x' icon={cardIcon} />
      <div className='mt-3 font-bold'>{props.title}</div>
      <div className='mt-3 text-gray-400'>{props.desc}</div>
    </div>
  )
}


function ExperienceInfo(props) {
  return (
    <div className='text-xl'>
      <div className='font-bold text-yellow-600'>{props.value}</div>
      <span>{props.desc}</span>
    </div>
  )
}

export default SkillsComponent