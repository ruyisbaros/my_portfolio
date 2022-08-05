import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

import './footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">@HMET</a>
            <ul className="footer__links">
                <li><a href="#header">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/ahmet-erdonmez-085bb8141/" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
                <a href="https://github.com/ruyisbaros" target="_blank" rel="noreferrer">
                    <FaGithubSquare />
                </a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Ahmet Erdonmez 2022. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
