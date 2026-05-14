import SectionHeading from '../components/SectionHeading'
import { FaMobileAlt, FaBrain } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

const paths = [
  { icon: <FaMobileAlt />, title: 'Responsive Design', desc: 'Mastering Media Queries and Flexbox to build mobile-first websites.', status: 'In Progress', statusColor: 'text-primary border-primary' },
  { icon: <SiJavascript />, title: 'JavaScript Basics', desc: 'Starting with DOM manipulation and basic logic building.', status: 'Starting Soon', statusColor: 'text-accent border-accent' },
  { icon: <FaBrain />, title: 'Problem Solving', desc: 'Practicing logical thinking to solve basic coding challenges.', status: 'Daily Practice', statusColor: 'text-green-400 border-green-400' },
]

export default function LearningPath() {
  return (
    <section id="learning" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="05" title="Learning Path" />
      <div className="grid md:grid-cols-3 gap-6">
        {paths.map(p => (
          <div key={p.title} className="bg-white/[0.02] border border-white/5 border-l-4 border-l-primary rounded-2xl p-7 hover:translate-x-2 hover:bg-primary/[0.03] hover:border-primary/40 transition-all cursor-pointer">
            <div className="text-2xl text-primary bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">{p.icon}</div>
            <h4 className="text-lg font-bold mb-2">{p.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
            <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${p.statusColor} bg-transparent`}>{p.status}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
