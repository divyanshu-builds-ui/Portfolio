import SectionHeading from '../components/SectionHeading'

const projects = [
  {
    tag: 'Case Study #01',
    title: 'SecureAccess Login UI',
    concept: 'Simplicity is the ultimate sophistication. More than just a form, this is an exercise in user psychology and data integrity.',
    features: ['JS-based Form Validation', 'Mobile-first Responsive Layout', 'Focus on User Data Privacy'],
  },
  {
    tag: 'Case Study #02',
    title: 'Minimalist Identity Portfolio',
    concept: 'Building a digital home. This project helped me master the balance between white space and content hierarchy.',
    features: ['Clean & Bold Typography', 'Semantic HTML5 Structure', 'Optimized for Fast Loading'],
  },
  {
    tag: 'Case Study #03',
    title: 'Modern Personal Dashboard',
    concept: 'Transforming complex data into a simplified visual experience using modern CSS techniques.',
    features: ['Advanced Flexbox Layouts', 'Dynamic Theme Switching', 'Custom CSS Animations'],
  },
]

export default function ProjectDetails() {
  return (
    <section id="project-details" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="09" title="Project Deep Dive" />
      <div className="space-y-8">
        {projects.map(p => (
          <div key={p.title} className="bg-white/[0.02] border-l-4 border-l-primary border border-white/5 rounded-2xl p-8 hover:bg-primary/[0.02] hover:scale-[1.01] transition-all">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">{p.tag}</span>
            <h4 className="text-2xl font-bold mt-3 mb-3">{p.title}</h4>
            <p className="text-gray-400 leading-relaxed mb-6"><strong className="text-gray-300">Concept:</strong> {p.concept}</p>
            <div className="flex flex-wrap gap-3">
              {p.features.map(f => (
                <span key={f} className="text-sm bg-primary/10 text-gray-200 px-4 py-2 rounded-lg flex items-center gap-2">
                  <span className="text-primary text-xs">●</span> {f}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
