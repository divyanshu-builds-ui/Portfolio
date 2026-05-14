import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-dark-900/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-2xl font-extrabold tracking-tight">
          D<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">G.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm text-gray-400 hover:text-primary transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl text-primary">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-8 bg-dark-900/95 border-b border-primary/20">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-lg text-gray-300 hover:text-primary">
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
