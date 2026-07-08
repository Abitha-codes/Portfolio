import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const stats = [
  { num: '2+', label: 'Projects Built' },
  { num: '5+', label: 'Technologies' },
  { num: '1', label: 'Certification' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section about-section" id="about" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">// 01 — About</p>
        <h2 className="section-title">
          Who I <span>Am</span>
        </h2>
        <p className="section-subtitle">
          A little bit about me and what drives me
        </p>
      </motion.div>

      <div className="about-wrapper">
        <motion.div
          className="about-card glass-card"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="about-text">
            I&apos;m a <span>MERN Stack Developer</span> with a passion for
            building modern, responsive web applications. I enjoy turning ideas
            into polished digital products—from clean UIs to functional
            backends. I stay curious, keep learning, and love exploring how{' '}
            <span>AI tools</span> can make development faster and smarter.
          </p>
        </motion.div>

        <motion.div
          className="stats-column"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {stats.map(({ num, label }) => (
            <div className="stat-box" key={label}>
              <span className="stat-num">{num}</span>
              <span className="stat-lbl">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}