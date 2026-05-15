import { useScroll, useTransform, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import DotNav from './components/DotNav'
import FloatingCTA from './components/FloatingCTA'
import CursorGlow from './components/CursorGlow'
import Preloader from './components/Preloader'
import EasterEgg from './components/EasterEgg'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import WhyMe from './sections/WhyMe'
import MyStory from './sections/MyStory'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const sections = ['home', 'about', 'tech', 'why', 'story', 'projects', 'contact']

function Parallax({ children, offset = 50 }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -offset])
  return <motion.div style={{ y }}>{children}</motion.div>
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Preloader />
      <CursorGlow />
      <EasterEgg />
      <Navbar />
      <DotNav sections={sections} />
      <FloatingCTA />
      <main>
        <Hero />
        <Parallax offset={30}><About /></Parallax>
        <TechStack />
        <Parallax offset={20}><WhyMe /></Parallax>
        <MyStory />
        <Parallax offset={25}><Projects /></Parallax>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
