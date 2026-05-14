import SectionHeading from '../components/SectionHeading'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaCode } from 'react-icons/fa'

const categories = [
  {
    label: 'Core Technologies',
    skills: [
      { icon: <FaHtml5 />, name: 'HTML5', sub: 'Structure & SEO', level: 'mastery' },
      { icon: <FaCss3Alt />, name: 'CSS3', sub: 'Mastering Layouts', level: 'learning' },
    ],
  },
  {
    label: 'Tools & Future',
    skills: [
      { icon: <FaJsSquare />, name: 'JavaScript', sub: 'Initial Basics', level: 'learning' },
      { icon: <FaCode />, name: 'VS Code', sub: 'Daily Editor', level: 'mastery' },
      { icon: <FaPython />, name: 'Python', sub: 'Exploring Basics', level: 'future' },
    ],
  },
]

const levelStyles = {
  mastery: 'border-t-2 border-t-primary',
  learning: 'border-dashed border-accent/50',
  future: 'opacity-60',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="04" title="Technical Skills" />
      <div className="space-y-10">
        {categories.map(cat => (
          <div key={cat.label}>
            <h4 className="text-primary text-sm uppercase tracking-widest font-mono mb-5">{cat.label}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {cat.skills.map(s => (
                <div key={s.name} className={`group bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-center hover:border-primary/50 hover:-translate-y-2 hover:bg-primary/5 transition-all cursor-pointer ${levelStyles[s.level]}`}>
                  <div className="text-4xl text-gray-400 group-hover:text-primary transition-colors mx-auto mb-3">{s.icon}</div>
                  <p className="font-bold text-sm">{s.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
