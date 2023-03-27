import React from 'react'
import playStore from "../../assets/playstore.png"
import  Appstore from "../../assets/Appstore.png"
import { Link } from 'react-router-dom'
import  "./Footer.css"
const Footer = () => {
  return (
    <footer id='footer'>
        <div className="leftFooter">
            <h4>Download Our App</h4>
            <p>Download App for Android and Apple Store</p>
            <img src={playStore} alt="playstore"/>
            <img src={Appstore} alt="playstore"/>
        </div>

        <div className="midFooter">
            <h1>UV Physical Training & Gym</h1>
            <p>In Here We will help you to Shape and Build Your Ideal Body</p>
            <p>All Terms and conditions under the Copyrights &copy; 2023 UVDeveloper</p>
        </div>

        <div className="rightFooter">
            <h4>Follow Us:</h4>
            <Link to={'#'}>LinkedIn</Link>
            <Link to={'#'}>Twitter</Link>
            <Link to={'#'}>Youtube</Link>
        </div>
    </footer>
  )
}

export default Footer