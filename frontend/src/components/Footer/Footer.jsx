import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" width="120" height="35" className='logo' />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam eveniet repellendus architecto rem 
                    vero ipsa, aut, 
                    ratione quo, pariatur vitae alias odit sed cumque perspiciatis. Qui harum ullam eius delectus!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9820361234</li>
                    <li>contact@eat24.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 © eat24.com -All Rights Reserved.</p>

    </div>
  )
}

export default Footer