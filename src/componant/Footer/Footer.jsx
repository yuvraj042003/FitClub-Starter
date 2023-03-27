import React from 'react'
import "./Footer.css";
import logo from "../../assets/logo.jpg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const Footer = () => {
  return (
    <div className='footer-container'>
    <hr/>
    <div className='blur footer-blur'></div>
    <div className='footer'>
        
    
    <div className='head'>
      <h3>UV Devlopers </h3>
      
    <div className='About-dev'>
        <span>All the Terms and conditions are under the section IT-Act-1991. </span>
        <span>All the services are reserved under &copy; 2023 </span>
        <span>Visit Again</span>
    </div>
    </div>
    </div>
    <div className='social-links'>
        <img src={linkedin} alt=""/>
        <img src={github} alt=""/>
      </div>
    
    </div>
  )
}

export default Footer