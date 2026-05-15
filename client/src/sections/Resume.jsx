import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal'
import { FaDownload, FaExpand, FaTimes, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'

const resumeData = {
  name: 'Divyanshu Kumar',
  location: 'Madhubani, Bihar, India',
  phone: '+91 8051725780',
  email: 'divyanshu.builds@gmail.com',
  portfolio: 'https://divyanshu-portfolio.vercel.app',
  github: 'divyanshu-builds-ui',
  linkedin: 'divyanshu-builds',
  objective: 'Passionate and self-driven Full-Stack Web Developer utilizing a dedicated gap year to master modern web architectures, build real-world digital solutions, and prepare for top-tier Computer Science engineering institutions.',
  skills: [
    { category: 'Frontend', items: 'HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Vite' },
    { category: 'Backend & Tools', items: 'Node.js, Express.js, Git, GitHub, Vercel Deployment' },
    { category: 'AI & Automation', items: 'AWS Q Integration, AI Prompt Engineering, Workflow Automation' },
  ],
  experience: [
    {
      title: 'Freelance Web Developer & UI Designer',
      subtitle: 'Remote (Local Enterprises)',
      points: [
        'Developed and deployed responsive user interfaces and digital branding assets for local retail shops and dairy platforms (e.g., Lucy Garden digital infrastructure).',
        'Designed custom 3x6 ft commercial layouts, high-res logos, and business landing pages.',
      ],
    },
    {
      title: 'Full-Stack Advanced Authentication System',
      subtitle: 'Personal Project',
      points: [
        'Created a secure and scalable login/signup interface with modern UI/UX design.',
        'Integrated frontend components with a live functional backend hosted on Vercel.',
      ],
    },
    {
      title: 'Dynamic Developer Portfolio',
      subtitle: 'Personal Project',
      points: [
        'Built a modern, highly responsive developer portfolio using React and Tailwind CSS.',
        'Implemented dynamic tool connections, GitHub API integrations, and Vercel Web Analytics.',
      ],
    },
  ],
  education: [
    { degree: 'B.Tech in Computer Science & Engineering', school: 'Target Batch: 2027-2031', year: 'Gap Year', score: '' },
    { degree: '12th (Senior Secondary)', school: 'S L M L +2 High School, Madhubani (BSEB)', year: '2026', score: '64%' },
    { degree: '10th (Secondary)', school: 'S L M L High School, Madhubani (BSEB)', year: '2024', score: '85%' },
  ],
  achievements: [
    '3x Prize Winner in high school academic competitions.',
    'Secured 2nd Rank in Regional Speech & Elocution Contest.',
  ],
  languages: 'Hindi (Native), Maithili (Native), English (Professional Elementary)',
}

function ResumeContent() {
  return (
    <div className="bg-white text-gray-900 p-6 sm:p-10 max-w-3xl mx-auto font-sans text-[13px] leading-relaxed">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-900 pb-4 mb-5">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight uppercase">{resumeData.name}</h1>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2 text-[11px] text-gray-600">
          <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-[9px]" />{resumeData.location}</span>
          <span className="flex items-center gap-1"><FaPhone className="text-[9px]" />{resumeData.phone}</span>
          <span className="flex items-center gap-1"><FaEnvelope className="text-[9px]" />{resumeData.email}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-1 text-[11px] text-gray-600">
          <span className="flex items-center gap-1"><FaGlobe className="text-[9px]" />Portfolio</span>
          <span className="flex items-center gap-1"><FaGithub className="text-[9px]" />{resumeData.github}</span>
          <span className="flex items-center gap-1"><FaLinkedin className="text-[9px]" />{resumeData.linkedin}</span>
        </div>
      </div>

      {/* Objective */}
      <Section title="OBJECTIVE">
        <p className="text-gray-700">{resumeData.objective}</p>
      </Section>

      {/* Skills */}
      <Section title="TECHNICAL SKILLS">
        <ul className="space-y-1">
          {resumeData.skills.map(s => (
            <li key={s.category}><strong>{s.category}:</strong> {s.items}</li>
          ))}
        </ul>
      </Section>

      {/* Experience */}
      <Section title="PROJECTS & EXPERIENCE">
        {resumeData.experience.map((exp, i) => (
          <div key={i} className={i > 0 ? 'mt-3' : ''}>
            <div className="flex justify-between items-baseline">
              <h4 className="font-bold text-sm">{exp.title}</h4>
              <span className="text-[10px] text-gray-500 italic shrink-0 ml-2">{exp.subtitle}</span>
            </div>
            <ul className="list-disc list-inside mt-1 text-gray-700 space-y-0.5">
              {exp.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </div>
        ))}
      </Section>

      {/* Education */}
      <Section title="EDUCATION">
        {resumeData.education.map((edu, i) => (
          <div key={i} className={`flex justify-between items-baseline ${i > 0 ? 'mt-1.5' : ''}`}>
            <div>
              <span className="font-bold">{edu.degree}</span>
              <span className="text-gray-600"> | {edu.school}</span>
            </div>
            <span className="text-[10px] text-gray-500 shrink-0 ml-2">{edu.year}{edu.score && ` | ${edu.score}`}</span>
          </div>
        ))}
      </Section>

      {/* Achievements */}
      <Section title="ACHIEVEMENTS">
        <ul className="list-disc list-inside text-gray-700 space-y-0.5">
          {resumeData.achievements.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </Section>

      {/* Languages */}
      <Section title="LANGUAGES">
        <p className="text-gray-700">{resumeData.languages}</p>
      </Section>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-4">
      <h3 className="text-xs font-black uppercase tracking-wider border-b border-gray-300 pb-1 mb-2 text-gray-900">{title}</h3>
      {children}
    </div>
  )
}

export default function Resume() {
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <>
      <section id="resume" className="py-20 sm:py-32 px-5 sm:px-6 max-w-4xl mx-auto">
        <Reveal>
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">// resume</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
            My <span className="text-gradient">resume</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass-card overflow-hidden">
            {/* Controls */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
              <span className="text-gray-500 text-xs font-mono">divyanshu_gupta_resume.pdf</span>
              <div className="flex gap-2">
                <button onClick={() => setFullscreen(true)} className="w-8 h-8 glass-card flex items-center justify-center text-gray-500 hover:text-primary transition-colors text-xs active:scale-90">
                  <FaExpand />
                </button>
                <a href="/my-cv.pdf" download="Divyanshu_Gupta_CV" className="w-8 h-8 glass-card flex items-center justify-center text-gray-500 hover:text-primary transition-colors text-xs active:scale-90">
                  <FaDownload />
                </a>
              </div>
            </div>
            {/* Resume rendered inline */}
            <div className="max-h-[500px] overflow-y-auto">
              <ResumeContent />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Fullscreen */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-dark-950/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 shrink-0">
              <span className="text-gray-500 text-xs font-mono">fullscreen_view</span>
              <div className="flex gap-2">
                <a href="/my-cv.pdf" download="Divyanshu_Gupta_CV" className="w-9 h-9 glass-card flex items-center justify-center text-gray-400 hover:text-primary transition-colors text-xs">
                  <FaDownload />
                </a>
                <button onClick={() => setFullscreen(false)} className="w-9 h-9 glass-card flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                  <FaTimes />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto py-6">
              <ResumeContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
