import { useState, useEffect } from 'react'
import Loader from './components/Loader/Loader'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  
  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />
  }

  return (
    <div className="app">
      <ScrollProgress />
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <Navbar />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
