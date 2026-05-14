import { useEffect, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { FaFire, FaTasks, FaCheckCircle } from 'react-icons/fa'

export default function Progress() {
  const [day, setDay] = useState('--')

  useEffect(() => {
    const start = new Date('2026-04-10')
    const diff = Math.ceil(Math.abs(new Date() - start) / (1000 * 60 * 60 * 24))
    setDay(Math.min(diff, 90).toString().padStart(2, '0'))
  }, [])

  const stats = [
    { icon: <FaFire />, label: 'Challenge Streak', value: `Day ${day} / 90`, desc: 'Building consistency through daily coding sessions.', color: 'text-orange-400' },
    { icon: <FaTasks />, label: 'Currently Building', value: 'Portfolio & Login UI', desc: 'Click to see my learning roadmap and mindset.', color: 'text-primary' },
    { icon: <FaCheckCircle />, label: 'Recent Milestones', value: '3 Projects Ready', desc: 'Portfolio V1 • Login UI • Current Live', color: 'text-primary' },
  ]

  return (
    <section id="progress" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="08" title="Live Progress" />
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map(s => (
          <div key={s.label} className="bg-white/[0.02] border border-primary/10 rounded-2xl p-7 flex gap-5 items-start hover:-translate-y-2 hover:border-primary/40 hover:bg-primary/5 transition-all">
            <div className={`text-2xl ${s.color} bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center shrink-0`}>{s.icon}</div>
            <div>
              <span className="text-xs text-accent uppercase tracking-wider font-bold">{s.label}</span>
              <h4 className="font-bold mt-1">{s.value}</h4>
              <p className="text-gray-500 text-xs mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
