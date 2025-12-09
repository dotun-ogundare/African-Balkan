import React from 'react'
import Mission from '../components/Mission'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About African Balkan Institute</h1>
          <p>Building bridges between continents, empowering communities</p>
        </div>
      </section>

      <section className="about-story section-padding">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                The African Balkan Institute (AFBi) was founded with a vision to
                strengthen the bonds between African and Balkan regions through
                meaningful collaboration, education, and sustainable
                development.
              </p>
              <p>
                Recognizing the rich cultural heritage and untapped potential of
                both regions, our founders established AFBi as a platform for
                exchange, learning, and mutual growth.
              </p>
              <p>
                Today, we stand as a testament to what can be achieved when
                communities come together with shared purpose and commitment to
                positive change.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800"
                alt="Our Story"
              />
            </div>
          </div>
        </div>
      </section>

      <Mission />

      <section className="values-section section-padding">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Integrity</h3>
              <p>
                We operate with transparency and honesty in all our endeavors
              </p>
            </div>
            <div className="value-card">
              <h3>Inclusivity</h3>
              <p>We embrace diversity and ensure everyone has a voice</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We seek creative solutions to complex challenges</p>
            </div>
            <div className="value-card">
              <h3>Impact</h3>
              <p>We measure success by the positive change we create</p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>We believe in the power of partnership and teamwork</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>
                We focus on long-term solutions that benefit future generations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section section-padding">
        <div className="container">
          <h2>Our Leadership</h2>
          <p className="team-intro">
            Meet the dedicated team behind AFBi's mission to create lasting
            impact
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                  alt="Team Member"
                />
              </div>
              <h4>Leadership Team</h4>
              <p>Committed to driving our mission forward</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
                  alt="Team Member"
                />
              </div>
              <h4>Program Directors</h4>
              <p>Overseeing impactful initiatives</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
                  alt="Team Member"
                />
              </div>
              <h4>Advisory Board</h4>
              <p>Providing strategic guidance and expertise</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
