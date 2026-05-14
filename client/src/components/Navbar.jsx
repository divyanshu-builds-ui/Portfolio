import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { href: '#home', label: 'home' },
  { href: '#projects', label: 'work' },
  { href: '#story', label: 'story' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-dark-950/70 border-b border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-14 flex items-center justify-between">
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

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-8 bg-dark-950/95 border-b border-primary/10">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="text-base font-mono text-gray-400 hover:text-primary">
                .{l.label}()
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
