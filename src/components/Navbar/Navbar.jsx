import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'
import { NAV_LINKS } from '../../utils/data'
import './Navbar.css'

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.toLowerCase())
        if (el) {
          const { top, bottom } = el.getBoundingClientRect()
          if (top <= 100 && bottom >= 100) { setActive(link); break }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Logo */}
      <div className="nav-logo" onClick={() => scrollTo('home')}>
        <div className="logo-box">A</div>
        <div className="logo-label">
          <span className="logo-name">Abitha</span>
          <span className="logo-dot" />
        </div>
      </div>

      {/* Desktop Links */}
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              className={`nav-link${active === link ? ' active' : ''}`}
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-right">
  <button
    className="hire-btn"
    onClick={() => scrollTo("contact")}
  >
    Hire Me  <FiArrowRight size={16} />
  </button>

  <button
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Menu"
  >
    {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
  </button>
</div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className={`mob-link${active === link ? ' active' : ''}`}
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
