import SectionHeading from '../components/SectionHeading'
import { FaEnvelopeOpenText, FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

const socials = [
  { icon: <FaEnvelopeOpenText />, name: 'Email', info: 'divyanshu.builds@gmail.com', status: 'Direct', href: 'mailto:divyanshu.builds@gmail.com', hoverClass: 'hover:border-red-500 hover:shadow-red-500/20' },
  { icon: <FaWhatsapp />, name: 'WhatsApp', info: 'Available for quick chats', status: 'Fast Response', href: 'https://wa.me/918051725780', hoverClass: 'hover:border-green-500 hover:shadow-green-500/20' },
  { icon: <FaLinkedinIn />, name: 'LinkedIn', info: 'Professional Network', status: 'Verified', href: 'https://linkedin.com/in/divyanshu-builds', hoverClass: 'hover:border-blue-500 hover:shadow-blue-500/20' },
  { icon: <FaGithub />, name: 'GitHub', info: 'Check out my repositories', status: 'Codebase', href: 'https://github.com/divyanshu-builds-ui', hoverClass: 'hover:border-white hover:shadow-white/10' },
  { icon: <FaInstagram />, name: 'Instagram', info: 'Dev Life & Creativity', status: 'Social', href: 'https://instagram.com/divyanshu.builds', hoverClass: 'hover:border-pink-500 hover:shadow-pink-500/20' },
]

export default function SocialHub() {
  return (
    <section id="social" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="18" title="Connect via Social Hub" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {socials.map(s => (
          <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className={`relative flex items-center gap-5 bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:-translate-y-2 hover:scale-[1.02] hover:bg-white/5 transition-all hover:shadow-lg ${s.hoverClass}`}>
            <div className="text-2xl w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400">{s.icon}</div>
            <div>
              <h4 className="font-bold text-sm">{s.name}</h4>
              <p className="text-xs text-gray-500">{s.info}</p>
            </div>
            <span className="absolute top-3 right-4 text-[9px] text-gray-600 uppercase font-mono">{s.status}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
