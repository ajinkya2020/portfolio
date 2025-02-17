import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TitleComponent from '../shared/TitleComponent'
import './IntroductionComponent.scss'

function IntroductionComponent() {
  return (
    <div className="block md:flex lg:flex justify-around px-20">
      <div className="intro-left text-3xl text-left">
        <div>Ajinkya</div>
        <span>Suryawanshi</span>
        <span className="font-bold text-yellow-600">.</span>
        <div className="my-name mt-7"></div>
        <section className="homenav-social">
          <nav>
            <ul>
              <li><a href="https://www.linkedin.com/in/ajinkya-suryawanshi-815851190/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin}/></a></li>
              <li><a href="https://github.com/ajinkya2020" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://www.instagram.com/_aajinkya_/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="mailto: ajinkyasuryawanshi20@gmail.com" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faEnvelope} /></a></li>
            </ul>
          </nav>
        </section>
      </div>
      <div className="intro-right text-left mt-10 md:mt-0 lg:mt-0">
      <TitleComponent title={'INTRODUCTION'}></TitleComponent>
        <div>Web Developer</div>
        <div className="text-gray-400">I work as a software developer based in India,<br></br> specializing in Angular, React, MongoDB, MySQL, Express, and Node for my tech stack.</div>
      </div>
    </div>
  )
}

export default IntroductionComponent