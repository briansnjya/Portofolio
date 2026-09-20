import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="px-8 py-28 bg-slate-950 text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-xl mx-auto">
        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Get In Touch</span>
        <h2 className="text-5xl font-black mb-6 tracking-tight">Let's <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Connect</span></h2>
        <p className="text-slate-400 mb-12 text-lg leading-relaxed">
          Currently looking for internship opportunities as part of my Enrichment Program in BINUS University.
          Whether you have a question, my inbox is always open!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          
          <a href="https://www.instagram.com/bri.hlm/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-slate-600 text-slate-300 px-7 py-3.5 rounded-xl font-semibold hover:border-pink-500 hover:text-pink-400 transition-all group">
            <FaInstagram className="text-xl group-hover:text-pink-400 transition-colors" />
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/brian-sanjaya-825799325/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-slate-600 text-slate-300 px-7 py-3.5 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-400 transition-all">
            <FaLinkedin className="text-xl text-blue-400" />
            LinkedIn
          </a>
          <a href="https://github.com/briansnjya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-slate-600 text-slate-300 px-7 py-3.5 rounded-xl font-semibold hover:border-slate-400 hover:text-white transition-all">
            <FaGithub className="text-xl" />
            GitHub
          </a>
        </div>
        <p className="text-slate-600 text-sm mt-16">© 2026 Brian Sanjaya Halim. Built with React and Tailwind CSS.</p>
      </div>
    </section>
  )
}