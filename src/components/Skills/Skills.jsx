import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SKILLS } from '../../utils/data'
import './Skills.css'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">// 02 — Skills</p>
        <h2 className="section-title">Tech <span>Stack</span></h2>
        <p className="section-subtitle">Technologies I work with to bring ideas to life</p>
      </motion.div>

      <div className="skill-grid">
        {SKILLS.map(({ cat, items }, catIdx) => (
          <motion.div
            key={cat}
            className="skill-cat glass-card"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
          >
            <div className="cat-name">{cat}</div>
            <div className="chips">
              {items.map(({ Icon, name, color }, i) => (
                <motion.div
                  className="chip"
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: catIdx * 0.1 + i * 0.05 + 0.15 }}
                  whileHover={{ scale: 1.06 }}
                >
                  <Icon size={16} color={color} />
                  {name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
