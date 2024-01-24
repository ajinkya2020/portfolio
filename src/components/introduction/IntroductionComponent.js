import React from 'react'
import './IntroductionComponent.css'

function IntroductionComponent() {
  return (
    <div className="block md:flex lg:flex justify-around">
      <div className="intro-left text-3xl text-left">
        <div>Ajinkya</div>
        <span>Suryawanshi</span>
        <span className="font-bold text-yellow-600">.</span>
        <div className="my-name mt-7"></div>
        <section className="homenav-social">
          <nav>
            <ul>
              <li><a href="https://www.linkedin.com/in/ajinkya-suryawanshi-815851190/" target="_blank" rel='noopener noreferrer'><img src="/linkedin_icon.png" alt="linkedIn"/></a></li>
              <li><a href="https://github.com/ajinkya2020" target="_blank" rel='noopener noreferrer'><img src="/github_icon.png" alt="github"/></a></li>
              <li><a href="https://www.instagram.com/_aajinkya_/" target="_blank" rel='noopener noreferrer'><img src="/instagram_icon.png" alt="instagram"/></a></li>
              <li><a href="mailto: ajinkyasuryawanshi20@gmail.com" target="_blank" rel='noopener noreferrer'><img src="/mail_icon.png" alt="gmail"/></a></li>
            </ul>
          </nav>
        </section>
      </div>
      <div className="intro-right text-left mt-10 md:mt-0 lg:mt-0">
        <div className="font-bold text-yellow-600 introduction-title">INTRODUCTION</div>
        <div>Full Stack Web Developer</div>
        <div className="text-gray-400">I work as a software developer based in India,<br></br> specializing in Angular, React, MongoDB, MySQL, Express, and Node for my tech stack.</div>
      </div>
    </div>
  )
}

export default IntroductionComponent