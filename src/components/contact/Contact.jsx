import React from 'react'
import { useState } from 'react';
import "./contact.scss"

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className='contact' id="contact">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/shake.svg" alt="" />
        </div>

      </div>

      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span className='greetings'>Thanks, I'll contact you soon.</span>}
        </form>

      </div>

    </div>
  )
}
