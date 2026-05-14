import SectionHeading from '../components/SectionHeading'
import { FaTerminal, FaMobileAlt, FaSquareRootAlt } from 'react-icons/fa'

const blogs = [
  { icon: <FaTerminal />, badge: 'v1.0 // Published', status: 'bg-green-500/10 text-green-400 border-green-500/20', title: 'The 20-Section Portfolio Architecture', desc: 'An engineering breakdown of building a massive portfolio. Mastering CSS Grid, BEM, and Responsive Logic.', meta: '5 min read' },
  { icon: <FaMobileAlt />, badge: 'v0.5 // Drafting', status: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', title: 'Coding on Mobile: No Hardware Excuses', desc: 'How I used Pydroid3 and mobile editors to master logic when a PC wasn\'t available.', meta: 'May 2026' },
  { icon: <FaSquareRootAlt />, badge: 'v0.1 // Planned', status: 'bg-gray-500/10 text-gray-400 border-gray-500/20', title: 'Physics of Code: PCM Logic in Dev', desc: 'Exploring how 12th-grade Vector Math and Logical Reasoning make JavaScript functions easier.', meta: 'June 2026' },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="16" title="Technical DevLogs" />
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map(b => (
          <article key={b.title} className="bg-[#0d1117]/70 backdrop-blur-xl border border-primary/10 rounded-2xl p-7 flex flex-col hover:border-primary/40 hover:-translate-y-3 hover:bg-primary/[0.02] transition-all cursor-pointer">
            <span className={`text-[10px] font-mono px-3 py-1 rounded-full border w-fit mb-5 ${b.status}`}>{b.badge}</span>
            <div className="text-2xl text-primary mb-5">{b.icon}</div>
            <h4 className="text-lg font-bold mb-3">{b.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{b.desc}</p>
            <div className="flex justify-between items-center mt-5 pt-4 border-t border-white/5">
              <span className="text-primary text-xs font-semibold">View Log →</span>
              <span className="text-blue-400 text-xs font-mono">{b.meta}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
