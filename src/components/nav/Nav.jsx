import { useState } from "react"
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { RiServiceLine } from 'react-icons/ri'
import { MdContactMail } from 'react-icons/md'
import { BiCommentDetail } from 'react-icons/bi'



const Nav = () => {

    const [activeNav, setActiveNav] = useState('#header')

    return (
        <nav>
            <a href="#header" className={activeNav === "#header" ? "active" : ""}
                onClick={() => setActiveNav("#header")}>
                <AiOutlineHome />
                <span>Home</span>
            </a>
            <a href="#about" className={activeNav === "#about" ? "active" : ""}
                onClick={() => setActiveNav("#about")}
            >
                <AiOutlineUser />
                <span>About</span>
            </a>
            <a href="#experience" className={activeNav === "#experience" ? "active" : ""}
                onClick={() => setActiveNav("#experience")}
            >
                <HiOutlineDesktopComputer />
                <span>Experiences</span>
            </a>
            <a href="#portfolio" className={activeNav === "#portfolio" ? "active" : ""}
                onClick={() => setActiveNav("#portfolio")}
            >
                <RiServiceLine />
                <span>Portfolio</span>
            </a>
            <a href="#contact" className={activeNav === "#contact" ? "active" : ""}
                onClick={() => setActiveNav("#contact")}
            >
                <MdContactMail />
                <span>Contact</span>
            </a>
            <a href="#testimonials" className={activeNav === "#testimonials" ? "active" : ""}
                onClick={() => setActiveNav("#testimonials")}
            >
                <BiCommentDetail />
                <span>Testimonials</span>
            </a>
        </nav>
    )
}

export default Nav
