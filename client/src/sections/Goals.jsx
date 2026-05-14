import SectionHeading from '../components/SectionHeading'
import { FaGraduationCap, FaRocket, FaChartLine } from 'react-icons/fa'

const goals = [
  { icon: <FaGraduationCap />, title: 'Academic Excellence', desc: 'Pursuing B.Tech to master core engineering principles and advanced coding.' },
  { icon: <FaRocket />, title: 'Startup Solutions', desc: 'Building impactful websites for startups to gain real-world professional experience.' },
  { icon: <FaChartLine />, title: 'Skill Evolution', desc: 'Learning future-ready languages to stay ahead in the ever-evolving tech industry.' },
]

export default function Goals() {
  return (
    <section id="goals" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="02" title="My Future Goals" />
      <div className="grid md:grid-cols-3 gap-6">
        {goals.map(g => (
          <div key={g.title} className="group bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-primary/50 hover:-translate-y-3 hover:bg-primary/5 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-2xl text-primary mb-6 group-hover:scale-110 transition-transform">
              {g.icon}
            </div>
            <h4 className="text-lg font-bold mb-2">{g.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
