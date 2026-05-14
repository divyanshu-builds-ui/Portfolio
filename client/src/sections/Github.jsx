import SectionHeading from '../components/SectionHeading'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa'

export default function Github() {
  return (
    <section id="github" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeading number="15" title="Code Repository" />
      <div className="bg-[#0d1117]/80 backdrop-blur-xl border border-[#30363d] rounded-3xl p-8 md:p-10 hover:border-green-600/50 hover:-translate-y-1 hover:shadow-2xl transition-all">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-5 mb-8">
          <div className="flex items-center gap-4">
            <FaGithub className="text-4xl text-white" />
            <div>
              <h4 className="text-xl font-bold">@divyanshu-builds-ui</h4>
              <span className="text-xs text-gray-500 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Active Developer</span>
            </div>
          </div>
          <a href="https://github.com/divyanshu-builds-ui" target="_blank" rel="noreferrer" className="bg-green-700 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors">
            View Profile <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[{ label: 'Architecture', val: 'In-Progress', color: 'text-green-500' }, { label: 'Current Build', val: '20 Sections', color: 'text-white' }, { label: 'Commit Status', val: 'Daily Push', color: 'text-blue-400' }].map(s => (
            <div key={s.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-4 hover:bg-white/[0.06] transition-colors">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-2">{s.label}</span>
              <span className={`font-bold text-sm ${s.color}`}>{s.val}</span>
            </div>
          ))}
        </div>

        {/* Featured Repo */}
        <div className="bg-black/30 border border-[#30363d] rounded-2xl p-6">
          <div className="flex justify-between items-center mb-3">
            <h5 className="text-blue-400 font-semibold flex items-center gap-2">📖 Master-Project: <span className="text-white">Portfolio-Ultra-V1</span></h5>
            <span className="text-[10px] text-gray-500 border border-[#30363d] px-2 py-0.5 rounded-full">Public</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">Developing a comprehensive 20-section mega portfolio. Focused on high-end CSS animations, Semantic HTML, and professional UI/UX architecture.</p>
          <div className="flex gap-5 text-xs text-gray-500">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-orange-500 rounded-full" /> HTML/CSS</span>
            <span className="flex items-center gap-1"><FaStar /> Featured</span>
            <span className="flex items-center gap-1"><FaCodeBranch /> Main</span>
          </div>
        </div>
      </div>
    </section>
  )
}
