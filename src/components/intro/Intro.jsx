import React from 'react'
import "./intro.scss"
// import { init } from 'ityped'
// import { useEffect, useRef } from 'react'

export default function Intro() {
    // const textRef = useRef();

    // useEffect(() => {
    //     const myElement = document.querySelector('#dynamic')
    //     init(myElement,
    //         {
    //             showCursor: false, strings: ["Designer", "Web Developer"], loop: false,
    //         }
    //     );
    // }, [])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="about">
                    <h2>Hi There, I'm</h2>
                    <h1>Satyam Mishra</h1>
                    <h3>Student <span>Web Developer</span></h3>
                    {/* <h3>Freelance <span ref={textRef} id="dynamic"></span></h3> */}
                </div>

                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

