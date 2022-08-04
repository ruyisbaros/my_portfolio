import React from 'react'
import './experience.css'
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { DiSass } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { BsBootstrap } from "react-icons/bs"
import { IoLogoNodejs } from "react-icons/io"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { SiSocketdotio } from "react-icons/si"
import { FaPython } from "react-icons/fa"
import { FaJava } from "react-icons/fa"
import { DiJavascript1 } from "react-icons/di"
import { AiFillGithub } from "react-icons/ai"
import { GrMysql } from "react-icons/gr"

const Experience = () => {
  return (
    <section id="skills">
      <h3>What skills I have</h3>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiJavascript1 className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icons" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icons" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <DiSass className="experience__details-icons" />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsBootstrap className="experience__details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillGithub className="experience__details-icons" />
              <div>
                <h4>Git - Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoNodejs className="experience__details-icons" />
              <div>
                <h4>Node jS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icons" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className="experience__details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <SiSocketdotio className="experience__details-icons" />
              <div>
                <h4>Socket.io</h4>
                <small className="text-light">Fundamentals</small>
              </div>
            </article>
            <article className="experience__details">
              <FaJava className="experience__details-icons" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Fundamentals</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className="experience__details-icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Fundamentals</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
