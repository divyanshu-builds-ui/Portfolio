import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')

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
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
      <SectionHeading number="19" title="Message Me" />
      <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-semibold block mb-2">Full Name</label>
              <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="w-full px-5 py-4 bg-[#111] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-primary focus:outline-none focus:shadow-lg focus:shadow-primary/10 transition-all" />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-2">Email Address</label>
              <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" className="w-full px-5 py-4 bg-[#111] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-primary focus:outline-none focus:shadow-lg focus:shadow-primary/10 transition-all" />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold block mb-2">Mobile Number</label>
            <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 00000 00000" className="w-full px-5 py-4 bg-[#111] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-primary focus:outline-none focus:shadow-lg focus:shadow-primary/10 transition-all" />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-2">Message</label>
            <textarea rows={5} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="How can I help you?" className="w-full px-5 py-4 bg-[#111] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-primary focus:outline-none focus:shadow-lg focus:shadow-primary/10 transition-all resize-none" />
          </div>
          <button type="submit" disabled={status === 'sending'} className="w-full py-4 bg-primary text-dark-900 font-extrabold rounded-xl flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            <FaPaperPlane />
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent! ✓' : 'Send Message'}
          </button>
        </form>
      </div>
      {status === 'sent' && <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-dark-800 border border-primary text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-bounce">Message sent successfully! 🚀</div>}
    </section>
  )
}
