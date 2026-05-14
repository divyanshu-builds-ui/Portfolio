import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { FaFireAlt, FaProjectDiagram, FaBolt } from 'react-icons/fa'

export default function Achievements() {
  const [streak, setStreak] = useState('03')

  useEffect(() => {
    const start = new Date(2026, 3, 10)
    const diff = Math.floor((new Date() - start) / (1000 * 3600 * 24)) + 1
    setStreak(Math.max(1, diff).toString().padStart(2, '0'))
  }, [])

  const items = [
    { icon: <FaFireAlt />, color: 'text-red-400 border-red-400/30 shadow-red-400/10', tag: 'Live Tracking', title: 'Coding Streak', desc: <>Current Status: <b className="text-primary">Day {streak}/90</b> challenge. Consistently pushing code daily.</> },
    { icon: <FaProjectDiagram />, color: 'text-primary border-primary/30 shadow-primary/10', tag: 'Build Phase', title: 'Rapid Prototyping', desc: <>Successfully deployed <b className="text-primary">02+ Live Projects</b>. Building 1 new UI every 2-3 days.</> },
    { icon: <FaBolt />, color: 'text-green-400 border-green-400/30 shadow-green-400/10', tag: 'Skill Acquisition', title: 'Fast Track Learning', desc: <>Mastered <b className="text-primary">Advanced HTML/CSS</b> within 1 week. Now scaling towards JS & Python.</> },
  ]

  return (
    <section id="achievements" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="13" title="Live Milestones" />
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(a => (
          <div key={a.title} className="bg-white/[0.02] backdrop-blur-xl border border-primary/10 rounded-3xl p-8 hover:border-primary/40 hover:-translate-y-2 hover:bg-primary/[0.03] transition-all">
            <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center text-2xl mb-6 shadow-lg ${a.color}`}>{a.icon}</div>
            <span className="text-primary font-mono text-[11px] tracking-widest">{a.tag}</span>
            <h4 className="text-lg font-bold mt-2 mb-3">{a.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
