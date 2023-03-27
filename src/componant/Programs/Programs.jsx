import React from 'react'
import "./Program.css";
import {programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className='Programs' id='programs'>
    <div className='Programs-Header'>
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>To Shape You</span>
    </div>
    <div className='Program-Categories'>
    {programsData.map((program)=>(
        <div className='categories'>
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className='Join-Now'><span>Join Now </span> <img src={RightArrow} className="Right-Arrow" alt='right-arrow'/></div>
        </div>
    ))}

    </div>

    </div>
  )
}

export default Programs