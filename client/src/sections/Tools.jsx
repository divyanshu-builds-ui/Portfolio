import SectionHeading from '../components/SectionHeading'
import { FaDesktop, FaFileCode, FaPalette, FaChrome, FaWindows, FaLeaf, FaDragon, FaExternalLinkAlt } from 'react-icons/fa'

const tools = [
  { name: 'VS Code', desc: 'IDE & Extensions', href: 'https://code.visualstudio.com/download', icon: <FaFileCode /> },
  { name: 'Canva', desc: 'UI/UX Inspiration', href: 'https://www.canva.com/', icon: <FaPalette /> },
  { name: 'DevTools', desc: 'Live Testing', href: 'https://www.google.com/chrome/', icon: <FaChrome /> },
]

export default function Tools() {
  return (
    <section id="tools" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="06" title="Tools & Software" />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {/* OS Card */}
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-primary/50 hover:-translate-y-2 transition-all">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-xl text-primary mb-4"><FaDesktop /></div>
          <h4 className="font-bold text-sm mb-1">Operating Systems</h4>
          <p className="text-xs text-gray-500 mb-3">Multi-boot environment</p>
          <div className="flex gap-2">
            <a href="https://www.microsoft.com/software-download/windows10" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"><FaWindows /></a>
            <a href="https://linuxmint.com/download.php" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all"><FaLeaf /></a>
            <a href="https://www.kali.org/get-kali/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all"><FaDragon /></a>
          </div>
        </div>

        {/* Tool Cards */}
        {tools.map(t => (
          <a key={t.name} href={t.href} target="_blank" rel="noreferrer" className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-primary/50 hover:-translate-y-2 hover:bg-primary/5 transition-all">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-xl text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">{t.icon}</div>
            <h4 className="font-bold text-sm mb-1">{t.name}</h4>
            <p className="text-xs text-gray-500">{t.desc}</p>
            <FaExternalLinkAlt className="absolute top-4 right-4 text-xs text-gray-600 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
          </a>
        ))}
      </div>
    </section>
  )
}
