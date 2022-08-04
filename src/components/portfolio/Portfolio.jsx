import './portfolio.css'
import img1 from '../../assets/f1.png'
import img2 from '../../assets/f2.png'
import img3 from '../../assets/f4.png'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h4 >My Recent Works</h4>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={img1} alt="img1" />
                    </div>
                    <h3>Lorem, ipsum dolor.</h3>
                    {/* https://github.com/ruyisbaros/e-commerce-tlnd */}
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/ruyisbaros/howIsYourVendor" className="btn" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://github.com/ruyisbaros/e-commerce-tlnd" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={img2} alt="img1" />
                    </div>
                    <h3>Lorem, ipsum dolor.</h3>
                    {/* https://github.com/ruyisbaros/e-commerce-tlnd */}
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/ruyisbaros/howIsYourVendor" className="btn" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://github.com/ruyisbaros/e-commerce-tlnd" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={img3} alt="img1" />
                    </div>
                    <h3>Lorem, ipsum dolor.</h3>
                    {/* https://github.com/ruyisbaros/e-commerce-tlnd */}
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/ruyisbaros/howIsYourVendor" className="btn" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://github.com/ruyisbaros/e-commerce-tlnd" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio
