import React from 'react'
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa'
import './Mission.css'

const Mission = () => {
  return (
    <section className="mission-section section-padding">
      <div className="container">
        <div className="mission-grid">
          <div className="mission-card">
            <div className="mission-icon vision">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              To create a world where African and Balkan communities thrive
              through mutual collaboration, shared knowledge, and sustainable
              development, fostering peace and prosperity for future
              generations.
            </p>
          </div>

          <div className="mission-card highlight">
            <div className="mission-icon mission">
              <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <p>
              To empower communities through education, promote cultural
              understanding, and facilitate sustainable development initiatives
              that strengthen ties between Africa and the Balkans while
              addressing critical social needs.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon values">
              <FaHeart />
            </div>
            <h3>Our Values</h3>
            <p>
              Integrity, inclusivity, innovation, and impact drive everything we
              do. We believe in transparency, respect for diversity, and the
              power of collaboration to create meaningful and lasting change.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
