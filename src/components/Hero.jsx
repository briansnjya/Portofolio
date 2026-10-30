import profileImg from '../assets/profile.jpeg'



export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-8 pt-24 pb-16 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse motion-reduce:animate-none" />
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 z-10">

        {/* TEXT SIDE */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <span className="anim-fade-up inline-block bg-slate-800/50 backdrop-blur border border-slate-700/50 text-sm px-4 py-2 rounded-full mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Computer Science @BINUS University | Intelligent Systems
            </span>
          </span>

          <p className="anim-fade-up text-xl text-slate-300 mb-2" style={{ animationDelay: '80ms' }}>Hi, I'm Brian.</p>
          <h1 className="anim-fade-up text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight text-white" style={{ animationDelay: '160ms' }}>
            I build{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Intelligent Systems.
            </span>
          </h1>

          <p className="anim-fade-up text-slate-300 text-lg mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0" style={{ animationDelay: '240ms' }}>
            Passionate about Machine Learning, Computer Vision, and Natural Language Processing.
            I turn complex AI models into scalable, end to end full stack web applications.
          </p>

          <div className="anim-fade-up flex flex-wrap gap-4 justify-center lg:justify-start mb-8" style={{ animationDelay: '320ms' }}>
            <a
              href="#projects"
              className="bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              View Projects
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="bg-slate-800 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-700 border border-slate-700 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Contact Me
            </a>
          </div>

      
          <div className="anim-fade-up flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-400" style={{ animationDelay: '400ms' }}>
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-white transition-colors">
                GitHub
              </a>
            )}
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-white transition-colors">
                LinkedIn
              </a>
            )}
            {links.cv && (
              <a href={links.cv} download className="hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-white transition-colors">
                Download CV
              </a>
            )}
          </div>
        </div>

        
        <div className="anim-fade-in w-full lg:w-2/5 flex justify-center" style={{ animationDelay: '200ms' }}>
          <div className="relative w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80">
          
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-40" />

    
            <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border-4 border-slate-950">
                <img
                  src={profileImg}
                  alt="Brian Sanjaya Halim"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}