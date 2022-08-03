import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

const Socials = () => {
    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/in/ahmet-erdonmez-085bb8141/" target="_blank" rel="noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://github.com/ruyisbaros" target="_blank" rel="noreferrer">
                <FaGithubSquare />
            </a>
        </div>
    )
}

export default Socials
