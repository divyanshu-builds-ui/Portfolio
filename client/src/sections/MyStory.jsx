import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { FaLightbulb, FaMobileAlt, FaRocket, FaFire, FaLaptopCode } from 'react-icons/fa'

const timeline = [
  { icon: <FaLightbulb />, year: 'Origin', title: 'The Spark', desc: 'Inspired by family at Adobe. Decided to build software.' },
  { icon: <FaMobileAlt />, year: 'Class 11', title: 'Mobile Coding', desc: 'First Python calculator on Pydroid 3. No PC, no excuses.' },
  { icon: <FaLaptopCode />, year: '2026', title: 'Web Dev Deep Dive', desc: 'Mastered HTML/CSS in 1 week. Built 3+ projects.' },
  { icon: <FaFire />, year: 'Now', title: 'Non-Stop Coding', desc: 'Daily coding streak since day one. Portfolio, auth system, React apps.' },
  { icon: <FaRocket />, year: 'Next', title: 'Full Stack', desc: 'B.Tech + React + Node.js. Complete web apps.' },
]

export default function MyStory() {
  return (
    <section id="story" className="py-20 sm:py-32 px-5 sm:px-6 max-w-3xl mx-auto">
      <Reveal>
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">// my-story</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
          The <span className="text-gradient">journey</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mb-10 sm:mb-14">From mobile coding to building real products.</p>
      </Reveal>

      <div className="relative pl-8 sm:pl-10">
        {/* Animated gradient line */}
        <div className="absolute left-[11px] sm:left-[14px] top-0 w-[2px] h-full bg-gradient-to-b from-primary/60 via-accent/30 to-transparent" />

        <div className="space-y-8 sm:space-y-12">
          {timeline.map((item, i) => (
            <Reveal key={i} delay={i * 0.1} direction="left">
              <div className="relative group">
                {/* Glowing dot */}
                <motion.div
                  whileTap={{ scale: 1.3 }}
                  className="absolute -left-[2.05rem] sm:-left-[2.35rem] top-2 w-6 h-6 sm:w-7 sm:h-7 bg-dark-950 border-2 border-primary/40 rounded-full flex items-center justify-center text-primary text-[10px] sm:text-xs group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(100,255,218,0.4)] transition-all duration-300"
                >
                  {item.icon}
                </motion.div>

                <div className="glass-card p-4 sm:p-5 group-hover:border-primary/20 transition-all duration-300">
                  <span className="text-primary font-mono text-[10px] sm:text-[11px] font-bold">{item.year}</span>
                  <h4 className="text-sm sm:text-base font-bold mt-1 text-gray-200">{item.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
