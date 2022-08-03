import React from 'react'
import CV from "../../assets/ahmet_erdonmez_CV.pdf"

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let's contact</a>
    </div>
  )
}

export default CTA
