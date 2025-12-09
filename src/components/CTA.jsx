import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './CTA.css'

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Be Part of the Change</h2>
          <p>
            Join us in creating a better future for communities across Africa
            and the Balkans. Whether through volunteering, partnerships, or
            donations, your support makes a difference.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Involved <FaArrowRight />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
