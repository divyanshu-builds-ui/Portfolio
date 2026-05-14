import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGitAlt, FaDesktop } from 'react-icons/fa'
import { SiTailwindcss, SiVite, SiReact } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5', color: '#e34f26' },
  { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572b6' },
  { icon: <FaJsSquare />, name: 'JavaScript', color: '#f7df1e' },
  { icon: <SiReact />, name: 'React', color: '#61dafb' },
  { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06b6d4' },
  { icon: <FaPython />, name: 'Python', color: '#3776ab' },
  { icon: <FaGitAlt />, name: 'Git', color: '#f05032' },
  { icon: <SiVite />, name: 'Vite', color: '#646cff' },
  { icon: <VscCode />, name: 'VS Code', color: '#007acc' },
  { icon: <FaDesktop />, name: 'Linux', color: '#fcc624' },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-20 sm:py-32 px-5 sm:px-6 max-w-5xl mx-auto">
      <Reveal>
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">// tech-stack</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
          Tools I <span className="text-gradient">use</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mb-8 sm:mb-12">Technologies I work with daily.</p>
      </Reveal>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.04} direction="scale">
            <motion.div
              whileHover={{ y: -6, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card p-4 sm:p-5 text-center cursor-default group relative overflow-hidden"
            >
              <div className="hidden sm:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${s.color}10, transparent 70%)` }} />
              <div className="relative">
                <div className="text-2xl sm:text-3xl mx-auto mb-1.5 sm:mb-2 transition-all duration-300" style={{ color: s.color }}>
                  {s.icon}
                </div>
                <p className="text-[10px] sm:text-xs font-mono text-gray-500">{s.name}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
