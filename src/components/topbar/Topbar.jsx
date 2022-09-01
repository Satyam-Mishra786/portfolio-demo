import React from 'react'
import "./topbar.scss";


export default function Topbar({ menuOpen, setMenuOpen }) {

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false)
    }
    else {
      setMenuOpen(true)
    }
  }

  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#works" className='logo'>.Sattu786</a>

          <div className="itemContainer">
            {/* <img src="" alt="phone" /> */}
            <span>+91 8252xxxxxx</span>
          </div>

          <div className="itemContainer">
            {/* <img src="" alt="email" /> */}
            <span>satyam@gmail.com</span>
          </div>

        </div>
        <div className="right">
          <div className="hamburger" onClick={toggleMenu}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
