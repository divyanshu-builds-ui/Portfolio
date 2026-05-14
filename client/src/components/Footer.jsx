import { FaGithub, FaLinkedinIn, FaWhatsapp, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080b10] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-extrabold mb-2">DG<span className="text-primary">.</span></div>
            <p className="text-gray-500 text-sm">Built with ❤️ in Bihar<br />Divyanshu Gupta © 2026</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-5">
              <a href="https://github.com/divyanshu-builds-ui" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary hover:-translate-y-1 transition-all text-lg"><FaGithub /></a>
              <a href="https://linkedin.com/in/divyanshu-builds" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary hover:-translate-y-1 transition-all text-lg"><FaLinkedinIn /></a>
              <a href="https://wa.me/918051725780" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary hover:-translate-y-1 transition-all text-lg"><FaWhatsapp /></a>
            </div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 bg-primary/10 border border-primary text-primary rounded-xl flex items-center justify-center hover:bg-primary hover:text-dark-900 hover:shadow-lg hover:shadow-primary/30 transition-all">
              <FaArrowUp />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/[0.03] text-[11px] font-mono text-gray-600 gap-2">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-lg shadow-green-500" /> All Systems Operational</span>
          <span>v2.0.4 - Stable Branch</span>
        </div>
      </div>
    </footer>
  )
}
