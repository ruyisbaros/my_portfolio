import './testimonials.css'
import { testimonials } from "../../data"


const Testimonials = () => {
    return (
        <section id="testimonials">
            <h4>Review From Professionals</h4>
            <h2>Testimonials</h2>
            <div className="container testimonials__container">
                {
                    testimonials.map(tst => (
                        <article key={tst.id} className="testimonial">
                            <div className="client__avatar">
                                <img src={tst.image} alt="img" />
                            </div>
                            <h5 className="client__name">{tst.name}</h5>
                            <h5 className="client__prof">{tst.profession}</h5>
                            <small className="client__review">{tst.comment}</small>

                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonials
