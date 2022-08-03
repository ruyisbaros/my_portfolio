import "./about.css"
import ahmet from "../../assets/ahmet.jpg"
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
                            <small>+2 Years</small>
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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias veniam ratione, explicabo necessitatibus minus nobis ullam, numquam velit nostrum ea laboriosam maxime enim voluptatibus odit in consequatur impedit suscipit temporibus nihil assumenda magnam! Error ratione ea, accusantium iure minus, ipsa quos iste eveniet saepe voluptates omnis dolorum. Iusto, velit eos.</p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
