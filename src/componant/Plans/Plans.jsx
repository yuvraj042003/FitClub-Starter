import React from 'react'
import "./Plans.css";
import {plansData} from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"
const Plans = () => {
  return (
    <div className='Plans-container'>
    <div className='blur plans-blur-1'></div>
    <div className='blur plans-blur-2'></div>
        <div className='Heading' style={{gap:"6rem"}}>
            <span className='stroke-text'>READY TO START   </span>
            <span>YOUR JOURNEY </span>
            <span className='stroke-text'>NOW WITH US </span>
        </div>
        {/* Plans Card */}
        <div className='plans'>
        {plansData.map((plans, i) => (
            <div className='plan' key={i}>
                {plans.icon}
                <span>{plans.name}</span>
                <span>${plans.price}</span>
                <div className='Features'>
                    {
                        plans.features.map((features, i)=>(
                            <div className='feature'>
                                <img src={whiteTick} alt=""/>
                                <span>{features}</span>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <span>See More Benifits- </span>
                </div>
                <div>
                    <button className='btn'>Join Now</button>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Plans