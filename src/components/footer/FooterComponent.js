import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './FooterComponent.css'

function FooterComponent() {
  return (
    <div className='footer-container mt-10 py-5 flex justify-center'>
      <div className='font-bold text-3xl'>THANKS<br/>FOR<br/>VISITING <span className='text-yellow-600'>!</span></div>
      <div className='ms-72 my-5'>
        <div className='text-yellow-600'>Feel free to connect with me.</div>
        <section className='text-2xl mt-1 mb-3'>
          <nav>
            <ul className="flex justify-center">
              <li className='me-5'><a href="https://www.linkedin.com/in/ajinkya-suryawanshi-815851190/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin}/></a></li>
              <li className='me-5'><a href="https://github.com/ajinkya2020" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a></li>
              <li className='me-5'><a href="https://www.instagram.com/_aajinkya_/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="mailto: ajinkyasuryawanshi20@gmail.com" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faGoogle} /></a></li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  )
}

export default FooterComponent