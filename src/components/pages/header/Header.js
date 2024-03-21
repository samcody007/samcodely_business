import React from 'react'
import logo from '../../../assets/images/Logo.svg'

export default function Header() {
  return (
    <div className='header-container'>
      <div className="header-sections">
        <div className="logo">
        <img src={logo} alt="" />
        <p>Nisa</p>
        </div>
        <div className="pages"></div>
      </div>
      <div className="header-auth"></div>
    </div>
  )
}
