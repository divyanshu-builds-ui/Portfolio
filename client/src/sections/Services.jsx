import SectionHeading from '../components/SectionHeading'
import { FaRocket, FaMagic, FaHandHoldingUsd, FaClock, FaBolt, FaWallet, FaChevronRight } from 'react-icons/fa'

const services = [
  {
    icon: <FaRocket />, title: 'Custom Web Development', badge: 'Most Popular',
    desc: 'From idea to execution. I build high-performance, responsive websites using the latest tech stack.',
    points: ['Clean & Semantic Code', 'SEO Optimized Structure'],
    meta: { icon: <FaClock />, text: 'Guaranteed 14-Day Delivery' },
    cta: 'Start Project',
  },
  {
    icon: <FaMagic />, title: 'UI/UX Modernization',
    desc: "Is your website looking old? I'll transform your outdated site into a modern, sleek digital experience.",
    points: ['Mobile-First Design', 'Improved User Journey'],
    meta: { icon: <FaBolt />, text: 'Speed & Performance Boost' },
    cta: 'Revamp Now',
  },
  {
    icon: <FaHandHoldingUsd />, title: 'Startup/Student Launchpad',
    desc: "Quality shouldn't always be expensive. Special low-cost packages for small businesses and students.",
    points: ['Affordable Pricing', 'Scalable Architecture'],
    meta: { icon: <FaWallet />, text: 'Budget-Friendly Quality' },
    cta: 'Get a Quote',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="10" title="Professional Solutions" />
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.title} className="relative bg-white/[0.02] border border-primary/10 rounded-3xl p-8 flex flex-col hover:-translate-y-3 hover:border-primary/40 hover:bg-primary/[0.03] transition-all">
            {s.badge && <span className="absolute -top-3 right-6 bg-primary text-dark-900 text-[10px] font-black px-4 py-1 rounded-full uppercase">{s.badge}</span>}
            <div className="text-3xl text-primary mb-5">{s.icon}</div>
            <h4 className="text-lg font-bold mb-3">{s.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
            <ul className="space-y-2 mb-6">
              {s.points.map(p => <li key={p} className="text-sm text-gray-300 flex items-center gap-2"><span className="text-primary">✦</span>{p}</li>)}
            </ul>
            <div className="mt-auto pt-5 border-t border-white/5">
              <span className="text-xs text-primary font-semibold flex items-center gap-2">{s.meta.icon} {s.meta.text}</span>
              <a href="#contact" className="mt-3 text-primary font-bold text-sm uppercase tracking-wide flex items-center gap-2 hover:gap-3 transition-all">
                {s.cta} <FaChevronRight className="text-xs" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
