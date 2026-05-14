import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa'

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'Modern developer portfolio with scroll animations, dark theme, and email backend.',
    tech: ['React', 'Tailwind', 'Vite', 'Framer Motion'],
    github: 'https://github.com/divyanshu-builds-ui/Portfolio',
    live: '#',
  },
  {
    title: 'SecureAccess Login UI',
    desc: 'Clean login/signup with JS validation and mobile-first responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#',
  },
  {
    title: 'Modern Dashboard',
    desc: 'Personal dashboard with theme switching, flexbox layouts, and CSS animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 px-5 sm:px-6 max-w-5xl mx-auto">
      <Reveal>
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">// projects</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
          Things I've <span className="text-gradient">built</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mb-8 sm:mb-12">Shipped and deployed.</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card p-5 sm:p-7 flex flex-col h-full group relative overflow-hidden hover:border-primary/20 transition-all duration-300"
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-center mb-4 sm:mb-5">
                <FaFolder className="text-primary/40 text-xl sm:text-2xl group-hover:text-primary transition-colors" />
                <div className="flex gap-3 text-gray-600">
                  <a href={p.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-1"><FaGithub /></a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors text-sm p-1"><FaExternalLinkAlt /></a>
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-bold mb-2 text-gray-200 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1 mb-4 sm:mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {p.tech.map(t => <span key={t} className="text-[9px] sm:text-[10px] font-mono text-gray-500 bg-white/[0.03] px-2 py-0.5 sm:py-1 rounded">{t}</span>)}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

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
