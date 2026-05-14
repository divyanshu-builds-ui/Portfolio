import SectionHeading from '../components/SectionHeading'
import { FaBrain, FaBug, FaMicrochip } from 'react-icons/fa'

const cards = [
  { icon: <FaBrain />, code: 'ANALYSIS_MODE', title: 'Analytical Approach', desc: 'Applying PCM (Physics, Chemistry, Maths) logic to break down complex coding problems into manageable modules.' },
  { icon: <FaBug />, code: 'DEBUG_ACTIVE', title: 'Debugging Efficiency', desc: 'Proactive in identifying syntax errors and logical bottlenecks, ensuring the final output is clean and bug-free.' },
  { icon: <FaMicrochip />, code: 'SYSTEM_ARCH', title: 'Structured Thinking', desc: 'Planning Website Architecture (UI/UX flow) with mathematical precision before writing the first line of code.' },
]

export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="14" title="Logic & Debugging" />
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map(c => (
          <div key={c.title} className="relative bg-[#0d1117]/60 backdrop-blur-xl border border-primary/10 rounded-2xl p-8 overflow-hidden hover:border-primary/40 hover:-translate-y-3 transition-all group">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="flex justify-between items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary text-lg">{c.icon}</div>
              <span className="text-[10px] text-primary font-mono bg-primary/5 px-2 py-1 rounded tracking-wider">{c.code}</span>
            </div>
            <h4 className="text-lg font-bold mb-3">{c.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary rounded-r group-hover:h-[60%] transition-all" />
          </div>
        ))}
      </div>
    </section>
  )
}
