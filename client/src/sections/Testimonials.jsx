import Reveal from '../components/Reveal'
import { FaQuoteLeft, FaUserCircle } from 'react-icons/fa'
import { testimonials } from '../data/portfolio'

function ComingSoon() {
  return (
    <div className="glass-card p-8 sm:p-12 text-center">
      <div className="text-3xl text-primary/30 mb-4"><FaQuoteLeft className="inline" /></div>
      <h4 className="text-lg font-bold text-gray-400 mb-2">Testimonials</h4>
      <p className="text-gray-600 text-sm font-mono">// awaiting_feedback — genuine reviews coming soon</p>
      <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-primary/20 to-accent/20 rounded-full overflow-hidden">
        <div className="h-full w-1/2 bg-primary/40 rounded-full animate-pulse" />
      </div>
    </div>
  )
}

export default function Testimonials() {
  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-20 sm:py-32 px-5 sm:px-6 max-w-5xl mx-auto">
        <Reveal>
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">// testimonials</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
            What people <span className="text-gradient">say</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <ComingSoon />
        </Reveal>
      </section>
    )
  }

  return (
    <section id="testimonials" className="py-20 sm:py-32 px-5 sm:px-6 max-w-5xl mx-auto">
      <Reveal>
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">// testimonials</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
          What people <span className="text-gradient">say</span>
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="glass-card p-6 hover:border-primary/20 transition-all">
              <FaQuoteLeft className="text-primary/20 text-lg mb-3" />
              <p className="text-gray-400 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <FaUserCircle className="text-primary/40 text-2xl" />
                <div>
                  <p className="text-sm font-bold text-gray-300">{t.name}</p>
                  <p className="text-[10px] font-mono text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
