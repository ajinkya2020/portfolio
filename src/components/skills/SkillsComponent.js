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
    desc: '15 Projects'
  },
  {
    title: "Game Development",
    icon: skillCardIcons.gameDev,
    desc: '15 Projects'
  },
  {
    title: "UI/UX Design",
    icon: skillCardIcons.uiUxDesign,
    desc: '15 Projects'
  },
]


function SkillsComponent() {
  return (
    <div>
      <div className='skills-card-container mt-20 py-5 px-40 flex justify-between'>
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

export default SkillsComponent