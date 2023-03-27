import React from 'react';              
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from "framer-motion"
const Hero = () => {
  const transition = {type: 'spring', duration:3}
  return (
        <div className="Hero">
        <div className='blur hero-blur'></div>
            <div className='Left-h'>
             <Header/>
             {/* The best heading */}
            <div className='the-animated-ad'>
            <motion.div
            initial={{left: '238px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type:'tween'}}
            ></motion.div>
            <span>This is the best club on the Town</span>
        </div>
        {/* The Hero Heading */}
        <div className='Hero-text'>
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal Body</span>
            </div>
            <div>
                <span>In Here We will help you to Shape and Build Your Ideal Body
                and live up your life to fullset</span>
            </div>
        </div>
        {/* Figures  */}
        <div className='figures'>
          <div >
            <span>+140</span>
            <span>Expert Coachs</span>
          </div> 
          <div>
          <span>+978</span>
            <span>Members Joined</span>
          </div> 
          <div>
          <span>+50</span>
            <span>Fittness Program</span>
          </div>      
        </div>
        {/* Hero Buttons */}
          <div className='Hero-Buttons'> 
            <buttons className='btn'>Get Started</buttons>
            <buttons className='btn'>Learn More</buttons>
          </div>  
        </div>
    
    <div className='Right-h'>
        <button className='btn'>Join Now</button>
        <motion.div 
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}
         className='heart-rate'>
        <img src={Heart} alt="" />
        <span>Heart Rate</span>
        <span> 116 bpm</span>
        </motion.div>
    </div>
    {/* Hero Image */}
    <img src={hero_image} className='hero-image' alt=""/>
    <img src={hero_image_back} className='hero-image-back' alt=""/>
   {/* Calories */}
        <div className='caloriese'>
        <img src={Calories} alt="" />
        <div>
        <span>Calories Burnd</span>
        <span> 220 KCal</span>
        </div>
        </div>
</div>
    
  )
}

export default Hero