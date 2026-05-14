import SectionHeading from '../components/SectionHeading'

const logs = [
  {
    label: 'FRONTEND_DEV', id: '#001', title: 'Web Design Roadmap', issuer: 'via freeCodeCamp & Apna College',
    bars: [{ name: 'HTML', val: 75 }, { name: 'CSS', val: 10 }],
    desc: 'Practicing on VS Code. Finished major HTML structures, currently exploring CSS Flexbox and Grid layouts.',
    tags: ['#HTML5', '#VS_Code', '#WebDev'],
  },
  {
    label: 'PYTHON_CORE', id: '#002', title: 'Python Programming', issuer: 'Self-Taught (Mobile + PC)',
    bars: [{ name: 'Logic', val: 10 }],
    desc: 'Built a Login Window concept. Learning core syntax and transitioning from mobile coding to advanced PC development.',
    tags: ['#Python3', '#Login_UI', '#ProblemSolving'],
  },
]

export default function DevLogs() {
  return (
    <section id="devlogs" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="12" title="Dev Learning Logs" />
      <div className="grid md:grid-cols-2 gap-8">
        {logs.map(log => (
          <div key={log.id} className="bg-[#0d1117]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all">
            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-primary font-mono text-xs">{log.label}</span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
              <span className="text-gray-600 font-mono text-xs">{log.id}</span>
            </div>
            <h4 className="text-xl font-bold mb-1">{log.title}</h4>
            <p className="text-gray-500 text-sm mb-5">{log.issuer}</p>
            <div className="space-y-3 mb-5">
              {log.bars.map(b => (
                <div key={b.name} className="flex items-center gap-3 text-xs font-mono text-gray-300">
                  <span className="w-10">{b.name}</span>
                  <div className="flex-1 h-2 bg-white/[0.03] rounded-full border border-white/[0.02] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full shadow-md shadow-primary/30" style={{ width: `${b.val}%` }} />
                  </div>
                  <span className="text-primary font-bold w-8 text-right">{b.val}%</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">{log.desc}</p>
            <div className="flex flex-wrap gap-2">
              {log.tags.map(t => <span key={t} className="text-[10px] text-gray-400 border border-white/10 px-3 py-1 rounded-md hover:border-primary hover:text-primary transition-colors">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
