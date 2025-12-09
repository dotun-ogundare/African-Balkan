import React from 'react'
import {
  FaGraduationCap,
  FaHandshake,
  FaGlobe,
  FaLightbulb,
} from 'react-icons/fa'
import './Impact.css'

const Impact = () => {
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
    <section className="impact-section section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our Impact</h2>
          <p>Creating lasting change through dedication and collaboration</p>
        </div>

        <div className="stats-grid">
          {features.map((feature, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="impact-story">
          <div className="story-content">
            <h3>Building Bridges, Transforming Lives</h3>
            <p>
              Since our establishment, AFBi has been at the forefront of
              creating meaningful connections between African and Balkan
              communities. Our programs have touched thousands of lives, from
              students receiving life-changing scholarships to communities
              benefiting from sustainable development projects.
            </p>
            <p>
              Through partnerships with educational institutions, government
              agencies, and civil society organizations, we continue to expand
              our reach and deepen our impact across both regions.
            </p>
          </div>
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800"
              alt="Our Impact"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
