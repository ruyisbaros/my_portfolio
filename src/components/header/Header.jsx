import React from 'react'
import CTA from './CTA'
import './header.css'
import ahmet from "../../assets/ahmet.jpg"
import Socials from './Socials'
import { BsArrowDownSquareFill } from "react-icons/bs"

const Header = () => {
    return (
        <header id="header">
            <div className="container header__container">
                <h4>Hi everyone! {"  "} I'm</h4>
                <h1>Ahmet Erdonmez</h1>
                <h3 className="text-light">Full Stack Web Developer</h3>
                <CTA />
                <Socials />
                <div className="ahmet">
                    <img src={ahmet} alt="ahmet" />
                </div>
                <a href="#contact" className="scroll__down">
                    <BsArrowDownSquareFill />
                </a>
            </div>
        </header>
    )
}

export default Header
