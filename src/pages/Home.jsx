import React from 'react'
import Hero from '../components/Home page/Hero section/Hero'
import About from '../components/Home page/About section/About'
import Service from '../components/Home page/Service section/Service'
import Resume from '../components/Home page/Resume section/Resume'
import Contact from '../components/Home page/Contact section/Contact'
import Skills from '../components/Home page/Skills section/Skills'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Resume />
      <Service />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
