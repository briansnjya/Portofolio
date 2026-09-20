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
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <span className="font-black text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Brian Sanjaya Halim
      </span>
      <div className="flex gap-8 text-sm font-medium text-gray-600">
        <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
        <a href="#stack" className="hover:text-blue-600 transition-colors">Stack</a>
        <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
        <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Contact</a>
      </div>
    </nav>
  )
}