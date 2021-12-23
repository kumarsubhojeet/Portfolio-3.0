import React from 'react'
import NavBar from './Compo/NavBar'
import Home from './Pages/Home'
import About from './Compo/About'
import WhyMy from './Compo/WhyMy.jsx'
import Qualifications from './Compo/Qualifications.jsx'
import Experiences from './Compo/Experiences.jsx'
import Projects from './Compo/Projects.jsx'
import Available from './Compo/Available.jsx'
import Contact from './Compo/Contact.jsx'
import Footer from './Compo/Footer.jsx'

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <WhyMy />
      <Qualifications />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
