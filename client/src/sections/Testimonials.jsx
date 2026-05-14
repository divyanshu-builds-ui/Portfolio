import SectionHeading from '../components/SectionHeading'
import { FaUserShield, FaUniversity, FaPlusCircle } from 'react-icons/fa'

const testimonials = [
  { icon: <FaUserShield />, text: '"Endorsement content is currently under verification. Genuine feedback from peers and mentors will be updated soon."', author: 'Verification Pending', role: 'Peer Review', pending: true },
  { icon: <FaUniversity />, text: '"Syncing feedback from academic mentors regarding PCM-based logical application in frontend development."', author: 'Awaiting Review', role: 'Academic Mentor', pending: true },
  { icon: <FaPlusCircle />, text: '"Have we worked together on a project? Your honest feedback helps in building a better web ecosystem. Let\'s connect."', author: 'Submit Feedback', role: 'Open for Connections', pending: false, cta: true },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="17" title="Endorsements" />
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className={`relative bg-[#0d1117]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col hover:border-primary/40 hover:-translate-y-3 transition-all ${t.pending ? 'opacity-80' : ''}`}>
            {t.pending && <span className="absolute top-4 right-4 text-[10px] text-primary font-mono tracking-wider animate-pulse">SYNCING...</span>}
            {t.pending && <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary animate-[loading_3s_infinite_linear] rounded" />}
            <div className="text-2xl text-primary mb-5">{t.icon}</div>
            <p className="text-gray-400 text-sm leading-relaxed flex-1 italic">{t.text}</p>
            <div className="mt-6">
              <h4 className="font-bold text-sm">{t.author}</h4>
              <span className="text-blue-400 text-xs font-mono">{t.role}</span>
            </div>
            {t.cta && <a href="#contact" className="mt-4 text-center py-2.5 bg-primary/5 border border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-dark-900 transition-all">Send Note</a>}
          </div>
        ))}
      </div>
    </section>
  )
}
