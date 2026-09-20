import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/Techstack'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-slate-950 text-slate-200 font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
    </div>
  )
}

export default App