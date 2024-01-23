import React from 'react'
import { Link } from "react-router-dom";
import './HeaderComponent.css'

function HeaderComponent() {
  return (
    <div className='flex justify-between px-5'>
      <span className='text-3xl'>AJ<span className='font-bold text-yellow-600'>.</span></span>
      <nav>
        <ul className='flex item-list text-l'>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`projects`}>Projects</Link>
          </li>
          <li>
            <Link to={`contact`}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderComponent