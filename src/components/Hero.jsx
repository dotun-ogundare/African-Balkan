import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            Bridging Continents,
            <br />
            Building Futures
          </h1>
          <p className="hero-subtitle">
            Empowering communities through education, cultural exchange, and
            sustainable development
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More <FaArrowRight />
            </Link>
            <Link to="/programs" className="btn btn-secondary">
              Our Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
