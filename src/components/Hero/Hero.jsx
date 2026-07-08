import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { SiReact, SiMongodb } from 'react-icons/si'
import profileImg from '../../assets/images/abitha.jpg'
import { ROLES } from '../../utils/data'
import './Hero.css'

function TypeWriter({ texts }) {
  const [idx, setIdx] = useState(0)
  const [shown, setShown] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = texts[idx]
    let tm
    if (!deleting && shown.length < target.length) {
      tm = setTimeout(() => setShown(target.slice(0, shown.length + 1)), 65)
    } else if (!deleting && shown.length === target.length) {
      tm = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && shown.length > 0) {
      tm = setTimeout(() => setShown(shown.slice(0, -1)), 38)
    } else {
      tm = setTimeout(() => {
        setDeleting(false)
        setIdx((prev) => (prev + 1) % texts.length)
      }, 200)
    }
    return () => clearTimeout(tm)
  }, [shown, deleting, idx, texts])

  return <span>{shown}<span className="type-cursor" /></span>
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
  await navigator.clipboard.writeText('abithas1202@gmail.com')
  setCopied(true)

  setTimeout(() => {
    setCopied(false)
  }, 2000)
}

  return (
    <section className="hero" id="home">
      {/* Left Content */}
      <div className="hero-content">
        <motion.div className="hero-badge" {...fadeUp(0.1)}>
          <span className="badge-dot" />
          Available for opportunities
        </motion.div>

        <motion.h1 className="hero-name" {...fadeUp(0.2)}>
          Hi, I&apos;m <span>Abitha</span>
        </motion.h1>

        <motion.div className="hero-role" {...fadeUp(0.3)}>
          <TypeWriter texts={ROLES} />
        </motion.div>

        <motion.p className="hero-desc" {...fadeUp(0.4)}>
          Fresher MERN Stack Developer focused on creating modern, responsive
          web applications and continuously expanding full-stack development
          expertise through real-world projects.
        </motion.p>

        <motion.div className="hero-btns" {...fadeUp(0.5)}>
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <a className="btn-outline" href="/Abitha_Resume.pdf" download>
            Download Resume
          </a>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
        </motion.div>

        <motion.div className="hero-socials" {...fadeUp(0.6)}>
          <a href="https://github.com/Abitha-codes" className="soc-link" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub size={17} />
          </a>
          <a href="https://linkedin.com/in/abitha-abi" className="soc-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={17} />
          </a>
          <button
            className="soc-link"
            onClick={copyEmail}
            aria-label="Copy Email"
      >
          <FiMail size={17} />
          </button>
          {copied && <span className="copy-msg">✓ Email copied!</span>}
        </motion.div>
      </div>

      {/* Right Photo */}
      <motion.div
        className="hero-photo"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <div className="hex-frame">
          <div className="ring-1" />
          <div className="ring-2" />
          <div className="photo-circle">
            <img src={profileImg} alt="Abitha S – MERN Stack Developer" />
          </div>
          <div className="floating-tag tag-1">
            <SiReact size={13} color="#61DAFB" /> React Developer
          </div>
          <div className="floating-tag tag-2">
            <SiMongodb size={13} color="#47A248" /> MongoDB
          </div>
        </div>
      </motion.div>

      {/* Scroll down hint */}
      <motion.button
        className="scroll-hint"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={18} />
      </motion.button>
    </section>
  )
}
