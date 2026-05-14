export default function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="text-primary font-mono text-lg">{number}.</span>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="hidden md:block flex-1 h-px bg-white/10 ml-4" />
    </div>
  )
}
