import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 300)
          return 100
        }
        return prev + 2
      })
    }, 25)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="loader-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader-logo">
            <div className="loader-icon">A</div>
            <span className="loader-name">Abitha<span className="loader-dot" /></span>
          </div>
          <div className="loader-bar-wrap">
            <motion.div
              className="loader-bar"
              initial={{ width: '0%' }}
              animate={{ width: `${count}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
          <p className="loader-pct">{count}%</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
