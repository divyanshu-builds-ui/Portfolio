import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { href: '#home', label: 'home' },
  { href: '#projects', label: 'work' },
  { href: '#story', label: 'story' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setVisible(y < 50 || y < lastY)
      setScrolled(y > 50)
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return (
    <motion.nav
      animate={{ y: visible ? 0 : -80 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled ? 'bg-dark-950/90 border-primary/5 shadow-lg shadow-primary/5' : 'bg-dark-950/70 border-white/[0.04]'
      }`}
    >
      <div className={`max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-12' : 'h-14'}`}>
        <a href="#home" className="text-xl font-black tracking-tight font-mono">
          <span className="text-primary">{'<'}</span>DG<span className="text-primary">{'/>'}</span>
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-xs font-mono text-gray-500 hover:text-primary transition-colors tracking-wide">
                .{l.label}()
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-xl text-primary p-2 -mr-2">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-6 py-8 bg-dark-950/95 border-b border-primary/10 overflow-hidden"
          >
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-base font-mono text-gray-400 hover:text-primary active:text-primary">
                  .{l.label}()
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
