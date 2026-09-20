import profileImg from '../assets/profile.jpeg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-8 pt-20 bg-slate-950 overflow-hidden">
      {/* Classy Aurora Background - Fixed visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10 pt-10 lg:pt-0">
        
        {/* TEXT SIDE */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur border border-slate-700/50 text-slate-300 text-sm px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">Computer Science Undergraduate Student @BINUS University | Intelligent Systems | Academic Mentor @BINUS University</span>
          </span>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight text-white">
            Hi, I'm Brian Sanjaya Halim, <br />
            I build <span className="text-blue-500">Intelligent</span><br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Systems.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0">
            Passionate about Machine Learning, Computer Vision, and Natural Language Processing.
            I specialize in turning complex AI models into scalable, end to end full stack web applications.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a href="#projects" className="bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
              View Projects →
            </a>
            <a href="#contact" className="bg-slate-800 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-700 border border-slate-700 transition-all">
              Contact Me
            </a>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="w-full lg:w-2/5 flex justify-center mb-10 lg:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Glow effect behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse" />
            
            {/* Image container with gradient border */}
            <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white">
                <img 
                  src={profileImg} 
                  alt="Brian Sanjaya Halim" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}