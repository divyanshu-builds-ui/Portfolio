import { FaDownload } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 pt-16">
      <div className="max-w-2xl">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Hi there, I'm</p>
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
          Divyanshu Gupta
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mt-4">
          Software Engineer & Web Developer
        </h2>
        <p className="text-gray-500 mt-6 max-w-lg mx-auto leading-relaxed">
          A results-driven developer <strong className="text-gray-300">coding since school</strong>. I specialize in building clean, responsive websites and am currently seeking <strong className="text-gray-300">freelance opportunities</strong> while pursuing my B.Tech journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a href="#contact" className="px-8 py-3 bg-primary text-dark-900 font-bold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1">
            Let's Work Together
          </a>
          <a href="/my-cv.pdf" download="Divyanshu_Gupta_CV" className="px-8 py-3 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary/10 transition-all hover:-translate-y-1 flex items-center gap-2">
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
