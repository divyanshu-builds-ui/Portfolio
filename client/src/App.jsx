import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useScroll, useTransform, motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { useAnalytics } from './components/Analytics'
import Navbar from './components/Navbar'
import DotNav from './components/DotNav'
import FloatingCTA from './components/FloatingCTA'
import CursorGlow from './components/CursorGlow'
import Preloader from './components/Preloader'
import EasterEgg from './components/EasterEgg'
import AnimatedBG from './components/AnimatedBG'
import BackToTop from './components/BackToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import WhyMe from './sections/WhyMe'
import MyStory from './sections/MyStory'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Blog from './sections/Blog'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

const sections = ['home', 'about', 'tech', 'why', 'story', 'projects', 'resume', 'contact']

function Parallax({ children, offset = 50 }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -offset])
  return <motion.div style={{ y }}>{children}</motion.div>
}

function HomePage() {
  const [ready, setReady] = useState(false)
  useAnalytics()

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader />
      <AnimatedBG />
      <CursorGlow />
      <EasterEgg />
      <Navbar />
      <DotNav sections={sections} />
      <FloatingCTA />
      <BackToTop />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <Parallax offset={30}><About /></Parallax>
        <TechStack />
        <Parallax offset={20}><WhyMe /></Parallax>
        <MyStory />
        <Parallax offset={25}><Projects /></Parallax>
        <Resume />
        <Blog />
        <Testimonials />
        <Contact />
      </motion.main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Analytics />
      </div>
    </BrowserRouter>
  )
}
