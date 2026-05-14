import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Goals from './sections/Goals'
import HireMe from './sections/HireMe'
import Skills from './sections/Skills'
import LearningPath from './sections/LearningPath'
import Tools from './sections/Tools'
import Journey from './sections/Journey'
import Progress from './sections/Progress'
import ProjectDetails from './sections/ProjectDetails'
import Services from './sections/Services'
import Experience from './sections/Experience'
import DevLogs from './sections/DevLogs'
import Achievements from './sections/Achievements'
import ProblemSolving from './sections/ProblemSolving'
import Github from './sections/Github'
import Blog from './sections/Blog'
import Testimonials from './sections/Testimonials'
import SocialHub from './sections/SocialHub'
import Contact from './sections/Contact'
import FAQ from './sections/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Goals />
        <HireMe />
        <Skills />
        <LearningPath />
        <Tools />
        <Journey />
        <Progress />
        <ProjectDetails />
        <Services />
        <Experience />
        <DevLogs />
        <Achievements />
        <ProblemSolving />
        <Github />
        <Blog />
        <Testimonials />
        <SocialHub />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
