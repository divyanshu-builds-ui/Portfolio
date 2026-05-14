import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-gray-700 font-mono">
          {'// '} designed & built by <span className="text-primary/60">divyanshu gupta</span> — {new Date().getFullYear()}
        </p>
        <div className="flex gap-5">
          <a href="https://github.com/divyanshu-builds-ui" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-primary transition-colors text-sm"><FaGithub /></a>
          <a href="https://linkedin.com/in/divyanshu-builds" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-primary transition-colors text-sm"><FaLinkedinIn /></a>
          <a href="https://wa.me/918051725780" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-primary transition-colors text-sm"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  )
}
