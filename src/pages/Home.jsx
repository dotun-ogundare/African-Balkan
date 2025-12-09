import React from 'react'
import Hero from '../components/Hero'
import About from '../components/AboutSection'
import Programs from '../components/ProgramsSection'
import Impact from '../components/Impact'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Programs />
      <Impact />
      <CTA />
    </div>
  )
}

export default Home
