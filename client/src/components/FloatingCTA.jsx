import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      const contactSection = document.getElementById('contact')
      if (footer && contactSection) {
        const footerTop = footer.getBoundingClientRect().top
        const contactTop = contactSection.getBoundingClientRect().top
        // Hide when near contact section or footer
        setShow(window.scrollY > 600 && footerTop > 200 && contactTop > 300)
      } else {
        setShow(window.scrollY > 600)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-4 right-4 z-40 md:hidden"
        >
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary/90 text-dark-950 font-bold rounded-2xl text-sm shadow-lg shadow-primary/20 active:scale-95 transition-transform"
          >
            💬 Let's Work Together
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
