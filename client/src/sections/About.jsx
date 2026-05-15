import Reveal from '../components/Reveal'
import { FaGraduationCap, FaCode, FaRocket, FaMapMarkerAlt } from 'react-icons/fa'

const tags = [
  { icon: <FaMapMarkerAlt />, label: 'Madhubani, Bihar' },
  { icon: <FaGraduationCap />, label: 'CSE Aspirant (2027)' },
  { icon: <FaCode />, label: 'Full-Stack Learner' },
  { icon: <FaRocket />, label: 'Gap Year Builder' },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 px-5 sm:px-6 max-w-4xl mx-auto">
      <Reveal>
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">// about</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-10">
          A bit about <span className="text-gradient">me</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="glass-card p-6 sm:p-8 md:p-12 relative group hover:border-primary/20 transition-all duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative">
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-4">
              Passionate and self-driven <span className="text-primary">Developer</span> fresh out of high school, currently utilizing a dedicated gap year to master advanced full-stack workflows and prepare for top-tier engineering institutions.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
              Proficient in crafting intuitive user interfaces and connecting them with modern backend services. Experienced in building real-world digital solutions, UI structures, and brand assets for local commercial enterprises.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Independent Full-Stack Learner & Aspiring Computer Science Engineer — Class of 2027.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
              {tags.map((t, i) => (
                <Reveal key={t.label} delay={0.3 + i * 0.1} direction="scale">
                  <span className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/5 text-primary border border-primary/10 rounded-full text-xs sm:text-sm font-mono hover:bg-primary/10 hover:border-primary/30 transition-all">
                    {t.icon} {t.label}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
