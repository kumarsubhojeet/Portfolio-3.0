import React , {Suspense , lazy} from 'react'

const NavBar = lazy(()=>import('./Compo/NavBar'))
const Home = lazy(()=>import('./Pages/Home'))
const About = lazy(()=>import('./Compo/About'))
const WhyMy = lazy(()=>import('./Compo/WhyMy'))
const Qualifications = lazy(()=>import('./Compo/Qualifications.jsx'))
const Experiences = lazy(()=>import('./Compo/Experiences'))
const Projects = lazy(()=>import('./Compo/Projects'))
const Contact = lazy(()=>import('./Compo/Contact'))
const Footer = lazy(()=>import('./Compo/Footer'))

const App = () => {
  return (
    <Suspense fallback={
      <div>
        <div uk-spinner></div>
      </div>
    }>
      <NavBar />
      <Home />
      <About />
      <WhyMy />
      <Qualifications />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />

    </Suspense>
  )
}

export default App
