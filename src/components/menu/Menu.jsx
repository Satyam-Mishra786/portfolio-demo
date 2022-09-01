import React from 'react'
import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    const toggleMenu = () => {
        if (menuOpen) {
            setMenuOpen(false)
        }
        else {
            setMenuOpen(true)
        }
    }

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={toggleMenu}>
                    <a href="#intro">Intro</a>
                </li>

                <li onClick={toggleMenu}>
                    <a href="#portfolio">Portfolio</a>
                </li>

                <li onClick={toggleMenu}>
                    <a href="#works">Works</a>
                </li>

                <li onClick={toggleMenu}>
                    <a href="#testimonials">Testimonials</a>
                </li>

                <li onClick={toggleMenu}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
