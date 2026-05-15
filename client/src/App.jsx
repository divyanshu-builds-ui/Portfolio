import Navbar from './components/Navbar'
import DotNav from './components/DotNav'
import FloatingCTA from './components/FloatingCTA'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import WhyMe from './sections/WhyMe'
import MyStory from './sections/MyStory'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const sections = ['home', 'about', 'tech', 'why', 'story', 'projects', 'contact']

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DotNav sections={sections} />
      <FloatingCTA />
      <main>
        <Hero />
        <About />
        <TechStack />
        <WhyMe />
        <MyStory />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
