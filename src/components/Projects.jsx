import mlImage from '../assets/ML.png'
import comvisImage from '../assets/Comvis.png'
import bookugerImage from '../assets/Bookuger.png'
import nlpImage from '../assets/nlp.png'
import stockImage from '../assets/Stock.png'

const projects = [
  {
    title: "Employee Salary Prediction",
    desc: "End to end web application predicting employee salaries in Indonesia based on UMR history and experience.",
    tags: ["Python", "FastAPI", "React", "Scikit-learn"],
    image: mlImage,
    link: "https://aol-ml.vercel.app/",  
  },
  {
    title: "Driver Drowsiness Detection",
    desc: "Computer vision system using YOLOv8 and Haar Cascade for real time driver drowsiness and traffic violation detection.",
    tags: ["OpenCV", "YOLOv8", "Deep Learning"],
    image: comvisImage,
    link: "https://aol-comvis.vercel.app/",  
  },
  {
    title: "Bookuger Library System",
    desc: "Modern library management information system featuring UI/UX design, comprehensive UML architecture, and barcode scanning logic.",
    tags: ["C#", "ASP.NET", "Figma", "Lucidchart"],
    image: bookugerImage,
    link: "https://aol-se-cuy.vercel.app/login",  
  },
  {
    title: "Smart Hoax Detector",
    desc: "NLP based web application that detects and classifies misinformation in Indonesian news articles using transformer models.",
    tags: ["Python", "BERT", "FastAPI", "React"],
    image: nlpImage,
    link: "https://aol-nlp.vercel.app/", 
  },
  {
    title: "IHSG Stock Tracker & Analysis",
    desc: "Full-stack web application for real-time IHSG stock analysis. Features interactive charts (MA-7 indicators), automated risk management calculators, and a robust async architecture bridging React and Python.",
    tags: ["React", "Python", "Pandas", "Gradio API", "yfinance"],
    image: stockImage,
    link: "https://stock-tracker-bay-three.vercel.app/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative px-8 py-28 bg-slate-950 overflow-hidden border-t border-slate-900">
      {/* Subtle Aurora for Projects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-black mb-3 tracking-tight text-white">Featured <span className="text-purple-400">Projects</span></h2>
        <p className="text-slate-400 mb-14 text-lg">A selection of my recent work focusing on AI integration and software architecture.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-slate-800/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 bg-slate-900/50 backdrop-blur-sm">
              <div className="h-52 overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t, j) => (
                    <span key={j} className="text-xs border border-slate-700 text-slate-300 px-3 py-1 rounded-full font-medium bg-slate-800/50">{t}</span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors group/link"
                >
                  View Details
                  <span className="group-hover/link:translate-x-1 transition-transform inline-block">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}