export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-8 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-full mb-8 shadow-sm">
         <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Computer Science Undergraduate Student @BINUS University | Intelligent Systems | Academic Mentor @BINUS University</span>
        </span>
        <h1 className="text-7xl font-black leading-tight mb-6 tracking-tight">
          Hi, I'm Brian Sanjaya Halim, <br />
          I build <span className="text-blue-600">Intelligent</span><br />
          <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">Systems.</span>
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-lg leading-relaxed">
          Passionate about Machine Learning, Computer Vision, and Natural Language Processing.
          I specialize in turning complex AI models into scalable, end to end full stack web applications.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 flex items-center gap-2">
            View Projects →
          </a>
          <a href="#contact" className="bg-gray-900 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-700 transition-all">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}