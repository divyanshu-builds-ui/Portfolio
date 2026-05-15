import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaArrowDown } from 'react-icons/fa'

const roles = ['production-ready web apps.', 'clean user interfaces.', 'full-stack solutions.', 'digital platforms.']

function useTyping(words, speed = 80, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), pause)
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length === 0) {
          setDeleting(false)
          setWordIdx((wordIdx + 1) % words.length)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIdx, words, speed, pause])

  return text
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const typed = useTyping(roles)

  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center text-center px-5 relative overflow-hidden">
      <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl relative">
        <motion.p variants={item} className="text-primary font-mono text-xs sm:text-sm tracking-widest mb-4 sm:mb-6">
          {'<Hello World />'}
        </motion.p>

        <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-8xl font-black leading-[0.9] tracking-tight">
          <span className="shimmer-text">Divyanshu</span>
          <br />
          <span className="text-white/90">Gupta</span>
        </motion.h1>

        <motion.p variants={item} className="text-sm sm:text-base md:text-lg text-muted mt-4 sm:mt-6 font-medium">
          Full-Stack Web Developer & Application Developer
        </motion.p>

        {/* Typing animation */}
        <motion.p variants={item} className="text-base sm:text-lg md:text-xl text-muted mt-2 sm:mt-3 font-light h-8">
          I build <span className="text-primary font-medium">{typed}</span>
          <span className="animate-pulse text-primary">|</span>
        </motion.p>

        <motion.p variants={item} className="text-gray-600 mt-3 sm:mt-4 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed">
          Building clean, functional, and production-ready web solutions.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <a href="#contact" onClick={() => window.__prefillContact = true} className="group relative px-7 py-3.5 bg-primary/10 border border-primary/50 text-primary font-bold rounded-full overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 text-sm sm:text-base">
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a href="#resume" className="px-7 py-3.5 border border-white/10 text-gray-400 rounded-full font-medium hover:border-primary/50 hover:text-primary transition-all active:scale-95 flex items-center justify-center gap-2 text-sm">
            <FaDownload className="text-xs" /> Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-8 text-primary/40 hover:text-primary transition-colors"
      >
        <FaArrowDown />
      </motion.a>

      <div className="absolute top-20 left-10 w-px h-20 bg-gradient-to-b from-primary/40 to-transparent hidden md:block" />
      <div className="absolute top-20 left-10 w-20 h-px bg-gradient-to-r from-primary/40 to-transparent hidden md:block" />
    </section>
  )
}
