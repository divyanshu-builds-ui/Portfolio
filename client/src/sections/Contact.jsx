import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { FaPaperPlane, FaEnvelope, FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram, FaPlus } from 'react-icons/fa'

const socials = [
  { icon: <FaEnvelope />, href: 'mailto:divyanshu.builds@gmail.com', label: 'Email', color: '#ea4335' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/918051725780', label: 'WhatsApp', color: '#25d366' },
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/divyanshu-builds', label: 'LinkedIn', color: '#0077b5' },
  { icon: <FaGithub />, href: 'https://github.com/divyanshu-builds-ui', label: 'GitHub', color: '#fff' },
  { icon: <FaInstagram />, href: 'https://instagram.com/divyanshu.builds', label: 'Instagram', color: '#e4405f' },
]

const faqs = [
  { q: 'Do you take freelance projects?', a: 'Yes! I specialize in responsive frontend development with modern dark aesthetics.' },
  { q: 'How do you manage coding with studies?', a: 'Discipline. I apply analytical reasoning from Physics/Math to solve programming challenges.' },
  { q: "What's your turnaround time?", a: 'Typically 14 days for a complete website. Faster for smaller projects.' },
]

const inputClass = "w-full px-4 sm:px-5 py-3.5 sm:py-4 bg-dark-900/50 border border-white/[0.06] rounded-xl text-white text-sm placeholder-gray-700 focus:border-primary/50 focus:outline-none focus:shadow-[0_0_20px_rgba(100,255,218,0.05)] transition-all duration-300"

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://portfolio-backend-six-azure.vercel.app/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
      } else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="py-20 sm:py-32 px-5 sm:px-6 max-w-4xl mx-auto">
      <Reveal>
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">// contact</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
          Let's <span className="text-gradient">connect</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mb-8 sm:mb-12">Got a project? Drop a message.</p>
      </Reveal>

      {/* Socials */}
      <Reveal delay={0.1}>
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10 sm:mb-14">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 glass-card flex items-center justify-center text-gray-600 hover:border-white/20 transition-all duration-300 active:scale-90"
              style={{ color: s.color }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </Reveal>

      {/* Form */}
      <Reveal delay={0.2}>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mb-14 sm:mb-20">
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" className={inputClass} />
            <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" className={inputClass} />
          </div>
          <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Phone (optional)" className={inputClass} />
          <textarea rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Your message..." className={`${inputClass} resize-none`} />
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3.5 sm:py-4 bg-primary/10 border border-primary/50 text-primary font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] transition-all disabled:opacity-50 text-sm sm:text-base active:scale-[0.98]"
          >
            <FaPaperPlane />
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent! ✓' : 'Send Message'}
          </motion.button>
        </form>
      </Reveal>

      {/* FAQ */}
      <Reveal delay={0.3}>
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4 sm:mb-6">// faq</p>
        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`glass-card overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-primary/20' : ''}`}
            >
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-4 sm:p-5 text-left gap-3">
                <span className="text-xs sm:text-sm font-medium text-gray-300">{f.q}</span>
                <FaPlus className={`text-xs text-primary shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-4 sm:pb-5 px-4 sm:px-5' : 'max-h-0'}`}>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {status === 'sent' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 glass-card glow-border px-5 py-3 sm:px-6 sm:py-4 z-50 text-primary font-mono text-xs sm:text-sm text-center"
        >
          ✓ Message sent successfully
        </motion.div>
      )}
    </section>
  )
}
