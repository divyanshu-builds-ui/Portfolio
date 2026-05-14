import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { FaPlus, FaTimes } from 'react-icons/fa'

const faqs = [
  { q: 'Do you take on freelance projects?', a: 'Yes, I am currently open to freelance opportunities and internships. I specialize in building high-performance, responsive frontend architectures with a clean dark aesthetic.' },
  { q: 'How do you manage Coding with B.Tech/JEE?', a: "It's about logical synergy. I apply the analytical reasoning from Physics and Math to solve programming challenges. Discipline is the bridge between my studies and development goals." },
  { q: 'Can you build professional sites using only mobile?', a: "While I now use a professional setup, I started my journey on Pydroid3. This taught me that logic doesn't depend on hardware; great code can be written anywhere if you have the will." },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
      <SectionHeading number="20" title="Common Questions" />
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className={`bg-[#0d1117]/60 border rounded-2xl transition-all ${open === i ? 'border-primary/40 bg-primary/[0.02]' : 'border-white/5'}`}>
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left">
              <h4 className="font-semibold text-sm md:text-base">{f.q}</h4>
              <span className={`text-primary transition-transform ${open === i ? 'rotate-45 text-red-400' : ''}`}>
                <FaPlus />
              </span>
            </button>
            <div className={`overflow-hidden transition-all ${open === i ? 'max-h-40 pb-6 px-6' : 'max-h-0'}`}>
              <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
