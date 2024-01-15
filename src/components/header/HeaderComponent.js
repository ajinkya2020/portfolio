import React from 'react'
import './HeaderComponent.css'

function HeaderComponent() {
  return (
    <div className='flex justify-between px-5'>
      <span className='text-3xl'>AJ<span className='font-bold text-yellow-600'>.</span></span>
      <ul className='flex item-list text-l'>
        <li>Home</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default HeaderComponent