import React, { useRef } from 'react'
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zfy3ou7', 'template_t9wm1nt', form.current, 'z48Et-GpyO7miKbgQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join' id='join-us'>
        <div className='left-j'>
            <hr />
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP </span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US </span>
            </div>
        </div>
        <div className='right-j'>
            <form ref={form} className='Email-container'>
            <input type="email" name='user_email' placeholder='Enter your Email-id' />
            <button className='btn btn-j' onSubmit={sendEmail}>Join Now</button>

            </form>
        </div>
    </div>
  )
}

export default Join