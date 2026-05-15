import { useRef } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'Modern developer portfolio with scroll animations, dark theme, and email backend.',
    tech: ['React', 'Tailwind', 'Vite', 'Framer Motion'],
    github: 'https://github.com/divyanshu-builds-ui/Portfolio',
    live: '#',
    gradient: 'from-primary/20 to-accent/20',
    emoji: '🌐',
  },
  {
    title: 'SecureAccess Login UI',
    desc: 'Clean login/signup with JS validation and mobile-first responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    emoji: '🔐',
  },
  {
    title: 'Modern Dashboard',
    desc: 'Personal dashboard with theme switching, flexbox layouts, and CSS animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#',
    gradient: 'from-purple-500/20 to-pink-500/20',
    emoji: '📊',
  },
]

const stats = [
  { value: 3, suffix: '+', label: 'Projects' },
  { value: 90, suffix: '', label: 'Day Streak' },
  { value: 7, suffix: '+', label: 'Technologies' },
]

export default function Projects() {
  const scrollRef = useRef(null)

  return (
    <section id="projects" className="py-20 sm:py-32 px-5 sm:px-6 max-w-5xl mx-auto">
      <Reveal>
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">// projects</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
          Things I've <span className="text-gradient">built</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mb-8 sm:mb-12">Shipped and deployed.</p>
      </Reveal>

      {/* Stats counters */}
      <Reveal>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {stats.map(s => (
            <div key={s.label} className="glass-card p-4 sm:p-5 text-center">
              <p className="text-xl sm:text-3xl font-black text-primary">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[10px] sm:text-xs text-gray-600 font-mono mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Mobile: horizontal scroll | Desktop: grid */}
      <div
        ref={scrollRef}
        className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-hide"
      >
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card flex flex-col min-w-[280px] sm:min-w-0 h-full snap-center group relative overflow-hidden hover:border-primary/20 transition-all duration-300"
            >
              {/* Project preview image/gradient */}
              <div className={`h-32 sm:h-36 bg-gradient-to-br ${p.gradient} flex items-center justify-center text-4xl relative overflow-hidden`}>
                <span className="group-hover:scale-125 transition-transform duration-500">{p.emoji}</span>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark-950/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={p.github} target="_blank" rel="noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-dark-950 transition-all"><FaGithub /></a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-dark-950 transition-all text-sm"><FaExternalLinkAlt /></a>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-sm sm:text-base font-bold mb-2 text-gray-200 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {p.tech.map(t => <span key={t} className="text-[9px] sm:text-[10px] font-mono text-gray-500 bg-white/[0.03] px-2 py-0.5 sm:py-1 rounded">{t}</span>)}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <p className="text-center text-[10px] text-gray-700 font-mono mt-3 sm:hidden">← swipe →</p>

      <Reveal delay={0.3}>
        <div className="mt-10 sm:mt-14 text-center">
          <a href="https://github.com/divyanshu-builds-ui" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 glass-card text-xs sm:text-sm text-gray-500 hover:text-primary hover:border-primary/30 transition-all font-mono active:scale-95">
            <FaGithub /> view_more_on_github
          </a>
        </div>
      </Reveal>
    </section>
  )
}
