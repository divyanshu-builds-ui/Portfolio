import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

const responses = {
  help: 'Commands: about, skills, contact, clear, exit',
  about: 'Divyanshu Gupta — 18yo dev from Bihar. Coding since school. React + Tailwind enthusiast.',
  skills: 'HTML5 ████████░░ 80%\nCSS3  ███████░░░ 70%\nJS    ████░░░░░░ 40%\nReact ███░░░░░░░ 30%',
  contact: 'Email: divyanshu.builds@gmail.com\nGitHub: @divyanshu-builds-ui',
  clear: '__CLEAR__',
  exit: '__EXIT__',
}

export default function EasterEgg() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState(['Type "help" for commands.'])
  const [keys, setKeys] = useState([])
  const inputRef = useRef(null)

  // Konami code detection
  useEffect(() => {
    const handleKey = (e) => {
      const newKeys = [...keys, e.key].slice(-10)
      setKeys(newKeys)
      if (newKeys.join(',') === KONAMI.join(',')) {
        setOpen(true)
        setKeys([])
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [keys])

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  const handleSubmit = (e) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    const res = responses[cmd]
    if (res === '__CLEAR__') {
      setHistory([])
    } else if (res === '__EXIT__') {
      setOpen(false)
      setHistory(['Type "help" for commands.'])
    } else {
      setHistory([...history, `> ${input}`, res || `Command not found: ${cmd}`])
    }
    setInput('')
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-4 sm:inset-auto sm:bottom-8 sm:right-8 sm:w-[420px] sm:h-[320px] z-[9999] bg-[#0d1117] border border-primary/30 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 flex flex-col"
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setOpen(false)} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[10px] font-mono text-gray-600">dg@portfolio ~ bash</span>
          </div>

          {/* Terminal body */}
          <div className="flex-1 overflow-y-auto p-4 font-mono text-xs text-gray-400 space-y-1">
            {history.map((line, i) => (
              <pre key={i} className={`whitespace-pre-wrap ${line.startsWith('>') ? 'text-primary' : ''}`}>{line}</pre>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 border-t border-white/5">
            <span className="text-primary text-xs font-mono">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 bg-transparent text-xs font-mono text-white outline-none placeholder-gray-700"
              placeholder="type a command..."
            />
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
