import SectionHeading from '../components/SectionHeading'
import { FaBullseye, FaSyncAlt, FaCheckDouble } from 'react-icons/fa'

const benefits = [
  { num: '01', icon: <FaBullseye />, title: 'Target Oriented', desc: "I don't just start projects; I finish them. Once a target is set, I don't stop until it's done." },
  { num: '02', icon: <FaSyncAlt />, title: 'Adaptability', desc: 'I am open to professional feedback and willing to iterate until the result matches the vision.' },
  { num: '03', icon: <FaCheckDouble />, title: 'Unstoppable Discipline', desc: 'Coding can be tough, but I have the persistence to sit through bugs and solve them without quitting.' },
]

export default function HireMe() {
  return (
    <section id="hire-me" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="03" title="Why Hire Me?" />
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map(b => (
          <div key={b.num} className="relative bg-white/[0.02] border border-white/5 rounded-2xl p-10 hover:border-primary/50 hover:-translate-y-3 hover:bg-primary/[0.03] transition-all overflow-hidden">
            <span className="absolute -top-2 -right-2 text-7xl font-black text-primary/[0.04]">{b.num}</span>
            <div className="text-3xl text-primary mb-6">{b.icon}</div>
            <h4 className="text-lg font-bold mb-3">{b.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
