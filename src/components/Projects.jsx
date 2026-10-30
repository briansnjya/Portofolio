import mlImage from '../assets/ML.png'
import comvisImage from '../assets/Comvis.png'
import bookugerImage from '../assets/Bookuger.png'
import nlpImage from '../assets/nlp.png'
import stockImage from '../assets/Stock.png'
import Reveal from './Reveal'


const projects = [
  {
    title: "Employee Salary Prediction",
    desc: "End to end web application predicting employee salaries in Indonesia based on UMR history and experience.",
    tags: ["Python", "FastAPI", "React", "Scikit learn"],
    image: mlImage,
    link: "https://aol-ml.vercel.app/",
    github: "",
    highlight: "",
  },
  {
    title: "Driver Drowsiness Detection",
    desc: "Computer vision system using YOLOv8 and Haar Cascade for real time driver drowsiness and traffic violation detection.",
    tags: ["OpenCV", "YOLOv8", "Deep Learning", "React", "Python"],
    image: comvisImage,
    link: "https://aol-comvis.vercel.app/",
    github: "",
    highlight: "",
  },
  {
    title: "Bookuger Library System",
    desc: "Modern library management information system featuring UI/UX design, comprehensive UML architecture, and barcode scanning logic.",
    tags: ["React", "ASP.NET", "Figma", "Lucidchart"],
    image: bookugerImage,
    link: "https://aol-se-cuy.vercel.app/login",
    github: "",
    highlight: "",
  },
  {
    title: "Smart Hoax Detector",
    desc: "NLP based web application that detects and classifies misinformation in Indonesian news articles using transformer models.",
    tags: ["Python", "BERT", "FastAPI", "React"],
    image: nlpImage,
    link: "https://aol-nlp.vercel.app/",
    github: "",
    highlight: "",
  },
  {
    title: "Stock Tracker & Analysis",
    desc: "Full stack web application for real time stock analysis. Features interactive charts (MA-7 indicators), automated risk management calculators, and a robust async architecture bridging React and Python.",
    tags: ["React", "Python", "Pandas", "Gradio API", "yfinance"],
    image: stockImage,
    link: "https://stock-tracker-bay-three.vercel.app/",
    github: "",
    highlight: "",
  },
]

function ProjectCard({ p, wide }) {
  return (
    <article
      className={`group h-full flex flex-col rounded-2xl overflow-hidden border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 ${
        wide ? "md:flex-row" : ""
      }`}
    >
      {/* Gambar: rasio seragam supaya semua card rapi */}
      <div className={`relative overflow-hidden aspect-video ${wide ? "md:aspect-auto md:w-1/2" : ""}`}>
        <img
          src={p.image}
          alt={`Tampilan project ${p.title}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      </div>

      <div className={`flex flex-col flex-1 p-6 ${wide ? "md:p-8 md:justify-center" : ""}`}>
        <h3 className="text-xl font-bold mb-2 text-white">{p.title}</h3>

        
        <p className={`text-slate-400 text-sm leading-relaxed mb-4 ${wide ? "" : "line-clamp-3"}`}>
          {p.desc}
        </p>

        {p.highlight && (
          <p className="text-sm text-emerald-300 mb-4">{p.highlight}</p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full font-medium bg-blue-500/10 text-blue-200 border border-blue-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* mt-auto: tombol selalu menempel di bawah card */}
        <div className="mt-auto flex flex-wrap items-center gap-3">
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Link App
            <span aria-hidden="true">↗</span>
          </a>
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  // Kalau jumlah project ganjil, card terakhir dibuat lebar supaya grid tidak bolong
  const lastIsWide = projects.length % 2 === 1

  return (
    <section id="projects" className="relative px-6 md:px-8 py-24 md:py-28 bg-slate-950 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-tight text-white">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-slate-400 mb-12 md:mb-14 text-lg max-w-2xl">
          A selection of my recent work focusing on AI integration and software architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const wide = lastIsWide && i === projects.length - 1
            return (
              <Reveal key={p.title} delay={(i % 2) * 120} className={wide ? "md:col-span-2" : ""}>
                <ProjectCard p={p} wide={wide} />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}