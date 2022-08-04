import React from 'react'
import './portfolio.css'
import { projects } from "../../data"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h4 >My Recent Works</h4>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    projects.map(dt => (
                        <article key={dt.id} className="portfolio_item">
                            <div className="portfolio_item-image">
                                <img src={dt.image} alt={dt.title} />
                            </div>
                            <h3>{dt.title}</h3>
                            {/* https://github.com/ruyisbaros/e-commerce-tlnd */}
                            <div className="portfolio__item-cta">
                                <a href={dt.github} className="btn" target="_blank" rel="noreferrer">Github</a>
                                <a href={dt.demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                            </div>
                        </article>
                    ))
                }

            </div>
        </section>
    )
}

export default Portfolio
