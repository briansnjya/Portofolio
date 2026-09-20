import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 py-4 flex justify-between items-center ${
      scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-sm border-b border-slate-800/50' : 'bg-transparent'
    }`}>
      <span className="font-black text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Brian Sanjaya Halim
      </span>
      <div className="flex gap-8 text-sm font-medium text-slate-300">
        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        <a href="#stack" className="hover:text-blue-400 transition-colors">Stack</a>
        <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
        <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">Contact</a>
      </div>
    </nav>
  )
}