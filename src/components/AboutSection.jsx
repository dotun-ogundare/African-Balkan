import React from 'react'
import {
  FaGraduationCap,
  FaHandshake,
  FaGlobe,
  FaLightbulb,
} from 'react-icons/fa'
import './AboutSection.css'

const AboutSection = () => {
  const features = [
    {
      icon: <FaGraduationCap />,
      title: 'Education Excellence',
      description:
        'Providing scholarships and educational opportunities to deserving students',
    },
    {
      icon: <FaHandshake />,
      title: 'Cultural Exchange',
      description:
        'Building bridges between African and Balkan communities through cultural programs',
    },
    {
      icon: <FaGlobe />,
      title: 'Global Impact',
      description:
        'Creating sustainable solutions that benefit communities across continents',
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description:
        'Fostering research and innovative approaches to community development',
    },
  ]

  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h3>Connecting Africa and the Balkans</h3>
            <p>
              The African Balkan Institute (AFBi) is a non-governmental
              organization committed to strengthening ties between African and
              Balkan regions through education, cultural exchange, and
              sustainable development initiatives.
            </p>
            <p>
              We believe in the power of collaboration and mutual understanding
              to create positive change. Our programs are designed to empower
              individuals, strengthen communities, and build lasting
              partnerships that transcend geographical boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
