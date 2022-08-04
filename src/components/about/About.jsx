import React from 'react'
import "./about.css"
import ahmet from "../../assets/a2.jpg"
import { MdWork } from "react-icons/md"
import { FiUsers } from "react-icons/fi"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me...</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ahmet} alt="ahmet" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <MdWork className="about_icon" />
                            <h5>Experience</h5>
                            <small>1+ Years</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about_icon" />
                            <h5>Connections</h5>
                            <small>3000+ Professionals Worldwide</small>
                        </article>
                        <article className="about__card">
                            <AiOutlineFundProjectionScreen className="about_icon" />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                    <p>I was appointed as a Class Tutor at DCI-Berlin in August 2021, where I started as a student , due to my advanced level in coding. I guide students to develop their MERN stack skills. We have been developing small and medium sized MERN Stack projects together. In the meantime, I am deepening my existing knowledge even more. <br />I can handle coding a modern a website front-to-end, end-to-front. In this sense, I can effectively use many of most modern Full Stack Web Development tools such as JavaScript, React, HTML5, CSS3, NodeJS,Express, MongoDB etc.<br /> I know fundamentals of Java and Python. And now I'm improving myself in MySQL. </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
