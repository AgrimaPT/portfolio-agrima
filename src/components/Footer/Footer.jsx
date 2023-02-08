import React from 'react'
import './Footer.css'

import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'




const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Agrima</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Resume</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>

        <div className='footer__socials'>
            <a href="http://instagram.com"><FiInstagram/></a>
            <a href="http://facebook.com"><FaFacebookF/></a>
            
        </div>

        <div className='footer__copyright'>
            <small>&copy; All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer
