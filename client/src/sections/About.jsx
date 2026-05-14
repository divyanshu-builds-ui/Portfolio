import SectionHeading from '../components/SectionHeading'
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa'

const highlights = [
  { icon: <FaGraduationCap />, label: '12th Graduate' },
  { icon: <FaCode />, label: 'Coding Enthusiast' },
  { icon: <FaRocket />, label: 'Fast Learner' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeading number="01" title="About Me" />
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 hover:border-primary/40 transition-colors">
        <p className="text-gray-400 leading-relaxed text-lg mb-4">
          I am a dedicated <strong className="text-gray-200">Web Developer</strong> who recently passed Class 12. My journey into the world of technology began in school, where I discovered my passion for coding and problem-solving.
        </p>
        <p className="text-gray-400 leading-relaxed text-lg">
          Right now, I am mastering <strong className="text-gray-200">HTML & CSS</strong> while diving into the basics of <strong className="text-gray-200">JavaScript</strong>. My ultimate goal is to become a Software Engineer and contribute to meaningful projects.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          {highlights.map(h => (
            <span key={h.label} className="flex items-center gap-2 px-5 py-3 bg-primary/10 text-primary border border-primary/20 rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition-all cursor-default">
              {h.icon} {h.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
