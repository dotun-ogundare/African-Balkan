import React from 'react'
import { Link } from 'react-router-dom'
import { FaBook, FaUsers, FaChartLine, FaHands } from 'react-icons/fa'
import './ProgramsSection.css'

const ProgramsSection = () => {
  const programs = [
    {
      icon: <FaBook />,
      title: 'Education & Scholarships',
      description:
        'Providing access to quality education through scholarships, mentorship programs, and academic resources.',
      image:
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600',
    },
    {
      icon: <FaUsers />,
      title: 'Cultural Exchange',
      description:
        'Facilitating cultural immersion programs, language courses, and exchange visits to promote mutual understanding.',
      image:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600',
    },
    {
      icon: <FaChartLine />,
      title: 'Research & Development',
      description:
        'Supporting research initiatives that address social, economic, and environmental challenges in both regions.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600',
    },
    {
      icon: <FaHands />,
      title: 'Community Projects',
      description:
        'Implementing grassroots initiatives focused on healthcare, infrastructure, and community empowerment.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600',
    },
    {
      icon: <FaBook />,
      title: 'Youth Leadership',
      description:
        'Developing the next generation of leaders through training programs, workshops, and mentorship opportunities.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
    },
    {
      icon: <FaUsers />,
      title: 'Women Empowerment',
      description:
        'Supporting women entrepreneurs and professionals through skill development, networking, and resource access.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
    },
  ]

  return (
    <section className="programs-section section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our Programs</h2>
          <p>
            Transforming lives through targeted initiatives and sustainable
            solutions
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div
                className="program-image"
                style={{ backgroundImage: `url(${program.image})` }}
              >
                <div className="program-overlay">
                  <div className="program-icon">{program.icon}</div>
                </div>
              </div>
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to="/programs" className="learn-more">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="programs-cta">
          <Link to="/programs" className="btn btn-primary">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection
