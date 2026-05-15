import Reveal from '../components/Reveal'
import { FaTerminal, FaRss } from 'react-icons/fa'
import { blogPosts } from '../data/portfolio'

function ComingSoon({ title, icon }) {
  return (
    <div className="glass-card p-8 sm:p-12 text-center">
      <div className="text-3xl text-primary/30 mb-4">{icon}</div>
      <h4 className="text-lg font-bold text-gray-400 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm font-mono">// coming_soon — content is being compiled</p>
      <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-primary/20 to-accent/20 rounded-full overflow-hidden">
        <div className="h-full w-1/3 bg-primary/40 rounded-full animate-pulse" />
      </div>
    </div>
  )
}

export default function Blog() {
  if (blogPosts.length === 0) {
    return (
      <section id="blog" className="py-20 sm:py-32 px-5 sm:px-6 max-w-5xl mx-auto">
        <Reveal>
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">// blog</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
            Dev <span className="text-gradient">logs</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <ComingSoon title="Blog Posts" icon={<FaTerminal className="inline" />} />
        </Reveal>
      </section>
    )
  }

  return (
    <section id="blog" className="py-20 sm:py-32 px-5 sm:px-6 max-w-5xl mx-auto">
      <Reveal>
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">// blog</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
          Dev <span className="text-gradient">logs</span>
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.map((post, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="glass-card p-6 hover:border-primary/20 transition-all group cursor-pointer">
              <span className="text-[10px] font-mono text-primary/60">{post.date} • {post.tag}</span>
              <h4 className="text-sm font-bold mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h4>
              <p className="text-gray-600 text-xs leading-relaxed">{post.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
