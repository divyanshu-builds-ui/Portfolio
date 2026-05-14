import SectionHeading from '../components/SectionHeading'
import { FaLightbulb, FaMobileAlt, FaRocket } from 'react-icons/fa'

const timeline = [
  { icon: <FaLightbulb />, tag: 'The Beginning', title: 'The Inspiration', desc: 'Inspired by family members at Adobe, I started my tech journey. I wanted to understand how software that runs the world is built.' },
  { icon: <FaMobileAlt />, tag: 'Class 11th', title: 'Mobile Learning Era', desc: "Built my first Python Calculator using Pydroid 3. It proved that you don't need a PC to start coding." },
  { icon: <FaRocket />, tag: 'Present', title: 'Current Mission', desc: 'Currently deep-diving into Full-Stack Web Development to build complete, professional websites from scratch.' },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeading number="07" title="My Journey" />
      <div className="relative pl-8 border-l-2 border-gradient-to-b from-primary to-accent border-primary/30 space-y-12">
        {timeline.map((item, i) => (
          <div key={i} className="relative group">
            <div className="absolute -left-[2.55rem] top-0 w-10 h-10 bg-dark-900 border-2 border-primary rounded-full flex items-center justify-center text-primary text-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/40 transition-all">
              {item.icon}
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-7 hover:border-primary/40 hover:translate-x-3 hover:bg-primary/[0.03] transition-all">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">{item.tag}</span>
              <h4 className="text-lg font-bold mt-2 mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
