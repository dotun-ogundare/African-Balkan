import React from 'react'
import {
  FaBook,
  FaUsers,
  FaChartLine,
  FaHands,
  FaGlobe,
  FaHeart,
} from 'react-icons/fa'
import './Programs.css'

const Programs = () => {
  const programs = [
    {
      icon: <FaBook />,
      title: 'Education & Scholarships',
      description:
        'We provide comprehensive scholarship programs for deserving students from both African and Balkan regions.',
      features: [
        'Full and partial scholarships for undergraduate and graduate studies',
        'Academic mentorship and tutoring programs',
        'Educational resource centers',
        'Study abroad opportunities',
      ],
      color: '#1a472a',
    },
    {
      icon: <FaUsers />,
      title: 'Cultural Exchange Programs',
      description:
        'Facilitating meaningful cultural interactions and understanding between communities.',
      features: [
        'Student and professional exchange programs',
        'Language learning initiatives',
        'Cultural festivals and events',
        'Heritage preservation projects',
      ],
      color: '#c8a97e',
    },
    {
      icon: <FaChartLine />,
      title: 'Research & Development',
      description:
        'Supporting innovative research addressing regional challenges and opportunities.',
      features: [
        'Research grants and fellowships',
        'Collaborative research projects',
        'Academic conferences and seminars',
        'Publication support',
      ],
      color: '#d4af37',
    },
    {
      icon: <FaHands />,
      title: 'Community Development',
      description:
        'Implementing grassroots projects that directly benefit local communities.',
      features: [
        'Healthcare access programs',
        'Infrastructure development',
        'Skills training and capacity building',
        'Women and youth empowerment',
      ],
      color: '#1a472a',
    },
    {
      icon: <FaGlobe />,
      title: 'Environmental Sustainability',
      description:
        'Promoting sustainable practices and environmental conservation.',
      features: [
        'Climate change awareness campaigns',
        'Renewable energy projects',
        'Conservation initiatives',
        'Sustainable agriculture programs',
      ],
      color: '#c8a97e',
    },
    {
      icon: <FaHeart />,
      title: 'Social Welfare',
      description:
        'Addressing critical social needs and promoting well-being in communities.',
      features: [
        'Food security programs',
        'Mental health support',
        'Elderly care initiatives',
        'Crisis response and relief',
      ],
      color: '#d4af37',
    },
  ]

  return (
    <div className="programs-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Programs</h1>
          <p>Comprehensive initiatives designed to create lasting impact</p>
        </div>
      </section>

      <section className="programs-list section-padding">
        <div className="container">
          <div className="programs-intro">
            <h2>Transforming Lives Through Action</h2>
            <p>
              Our programs are carefully designed to address the most pressing
              needs in African and Balkan communities while fostering
              collaboration, innovation, and sustainable development.
            </p>
          </div>

          <div className="programs-detailed">
            {programs.map((program, index) => (
              <div key={index} className="program-detail">
                <div className="program-header">
                  <div
                    className="program-icon-large"
                    style={{ background: program.color }}
                  >
                    {program.icon}
                  </div>
                  <div>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                  </div>
                </div>
                <div className="program-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {program.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="program-cta section-padding">
        <div className="container">
          <div className="cta-box">
            <h2>Get Involved in Our Programs</h2>
            <p>
              Whether you're a student seeking opportunities, an organization
              looking for partnerships, or an individual wanting to make a
              difference, we welcome your participation.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Apply for Programs</button>
              <button className="btn btn-secondary">Partner With Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs
