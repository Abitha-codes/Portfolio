import { FiArrowUp } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  const scrollTop = () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-logo">
        <div className="logo-box">A</div>
        <div className="logo-label">
          <span className="logo-name">Abitha</span>
          <span className="logo-dot" />
        </div>
      </div>

      <p className="footer-copy">
        Designed &amp; Developed by <span>Abitha</span> · {new Date().getFullYear()}
      </p>

      <button className="back-top" onClick={scrollTop} aria-label="Back to top">
        <FiArrowUp size={17} />
      </button>
    </footer>
  )
}
