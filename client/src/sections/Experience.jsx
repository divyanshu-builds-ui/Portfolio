import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

const tabs = [
  {
    id: 'experience',
    label: 'Experience',
    content: [
      { title: 'Self-Learning Phase', date: 'Active (2026)', role: 'Web Development Enthusiast', desc: 'Intensively learning the art of crafting responsive websites.', tasks: ['Built 3+ responsive UI projects using HTML/CSS.', 'Mastering CSS Flexbox and Grid for pixel-perfect layouts.'], planned: false },
      { title: 'Upcoming Milestone', date: 'In Pipeline', role: 'E-Commerce Web Concept', desc: 'Building a local shop website to solve real-world business problems.', tasks: ['Interactive UI for local vendors.', 'Focusing on user-experience and fast loading.'], planned: true },
    ],
  },
  {
    id: 'education',
    label: 'Education',
    content: [
      { title: 'B.Tech in Computer Science', date: '2026 - 2030', role: 'JEE MAINS & LPUNEST Aspirant', desc: 'Core CSE focus with targeted expertise in Full Stack & AI/ML.', tasks: ['DSA', 'Cloud'], planned: true },
      { title: 'Intermediate (Class XII)', date: 'Graduated 2026', role: 'S L M L +2 High School, Madhubani', desc: 'Score: 64% | BSEB | PCM Specialist', tasks: [], planned: false },
      { title: 'Matriculation (Class X)', date: 'Graduated 2024', role: 'S L M L High School, Madhubani', desc: 'Score: 85% | BSEB', tasks: ['3x Prize Winner', 'Speech 2nd Rank'], planned: false },
    ],
  },
]

export default function Experience() {
  const [active, setActive] = useState('experience')
  const current = tabs.find(t => t.id === active)

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeading number="11" title="Journey, Learning & Expertise" />
      <div className="flex gap-4 mb-10">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActive(t.id)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${active === t.id ? 'bg-primary text-dark-900' : 'bg-white/5 text-gray-400 hover:text-primary'}`}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="relative pl-7 border-l-2 border-primary/20 space-y-10">
        {current.content.map((item, i) => (
          <div key={i} className={`relative group ${item.planned ? 'opacity-60' : ''}`}>
            <div className={`absolute -left-[1.95rem] top-1 w-3.5 h-3.5 rounded-full border-[3px] border-primary bg-dark-900 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/40 transition-all ${item.planned ? 'border-dashed border-gray-500' : ''}`} />
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-7 hover:border-primary/40 hover:translate-x-2 hover:bg-primary/[0.02] transition-all">
              <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
                <h4 className="text-primary font-bold">{item.title}</h4>
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full font-bold">{item.date}</span>
              </div>
              <p className="text-sm text-gray-300 mb-2">{item.role}</p>
              <p className="text-gray-500 text-sm">{item.desc}</p>
              {item.tasks.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {item.tasks.map(t => <li key={t} className="text-xs text-gray-400 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-primary">{t}</li>)}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
