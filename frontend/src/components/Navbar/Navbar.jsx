import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='Navbar'>
     <img src={assets.logo} alt="Company Logo" className='logo' />


    </div>
  )
}

export default Navbar