import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { FaBullseye, FaSyncAlt, FaCheckDouble, FaGraduationCap, FaRocket, FaChartLine } from 'react-icons/fa'

const points = [
  { icon: <FaBullseye />, title: 'Target Oriented', desc: "I don't just start projects — I finish them." },
  { icon: <FaSyncAlt />, title: 'Adaptable', desc: 'Open to feedback, iterate until perfect.' },
  { icon: <FaCheckDouble />, title: 'Disciplined', desc: 'I sit through bugs without quitting.' },
  { icon: <FaGraduationCap />, title: 'Academic Focus', desc: 'B.Tech with engineering principles.' },
  { icon: <FaRocket />, title: 'Startup Ready', desc: 'Building real websites for businesses.' },
  { icon: <FaChartLine />, title: 'Always Growing', desc: 'Learning future-ready tech daily.' },
]

export default function WhyMe() {
  return (
    <section id="why" className="py-20 sm:py-32 px-5 sm:px-6 max-w-5xl mx-auto">
      <Reveal>
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">// why-me</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
          Why <span className="text-gradient">hire</span> me
        </h2>
        <p className="text-muted text-sm sm:text-base mb-8 sm:mb-12">What I bring to the table.</p>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.97 }}
              className="glass-card p-4 sm:p-6 group hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-primary/60 text-base sm:text-lg mb-2 sm:mb-3 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)] transition-all">{p.icon}</div>
              <h4 className="font-bold text-xs sm:text-sm mb-1 text-gray-200">{p.title}</h4>
              <p className="text-gray-600 text-[10px] sm:text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
