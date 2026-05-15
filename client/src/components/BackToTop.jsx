import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 bg-primary/10 border border-primary/30 text-primary rounded-xl flex items-center justify-center hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(100,255,218,0.15)] transition-all active:scale-90 hidden md:flex"
        >
          <FaArrowUp className="text-xs" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
