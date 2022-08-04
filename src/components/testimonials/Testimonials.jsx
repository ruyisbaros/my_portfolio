import React, { useState } from 'react'
import './testimonials.css'
import { testimonials } from "../../data"
import { RiDoubleQuotesL } from "react-icons/ri"
import { RiDoubleQuotesR } from "react-icons/ri"

import { BsChevronLeft } from "react-icons/bs"
import { BsChevronRight } from "react-icons/bs"



const Testimonials = () => {

    const [activeIndex, setActiveIndex] = useState(0)



    return (
        <section id="testimonials">
            <h4>Review From Professionals</h4>
            <h2>Testimonials</h2>
            <div className="testimonials__container">
                <div className="wrapper">
                    <article className="testimonial">

                        <div className="client__avatar">
                            <img src={testimonials[activeIndex].image} alt="img" />
                        </div>
                        <h5 className="client__name">{testimonials[activeIndex].name}</h5>
                        <h5 className="client__prof">{testimonials[activeIndex].profession}</h5>
                        <small className="client__review">
                            <RiDoubleQuotesL className="qu__left" />
                            {testimonials[activeIndex].comment}
                            <RiDoubleQuotesR className="qu__right" />
                        </small>
                        <button onClick={() => setActiveIndex(activeIndex - 1)} disabled={activeIndex === 0} className="left">
                            <BsChevronLeft />
                        </button>
                        <button onClick={() => setActiveIndex(activeIndex + 1)} disabled={activeIndex === testimonials.length - 1} className="right">
                            <BsChevronRight />
                        </button>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
