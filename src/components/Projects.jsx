import mlImage from '../assets/ML.png'
import comvisImage from '../assets/Comvis.png'
import bookugerImage from '../assets/Bookuger.png'
import nlpImage from '../assets/nlp.png'

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
]

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-28 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-3 tracking-tight">Featured <span className="text-purple-500">Projects</span></h2>
        <p className="text-gray-500 mb-14 text-lg">A selection of my recent work focusing on AI integration and software architecture.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
              <div className="h-52 overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
              <div className="p-6 bg-gray-900 text-white">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t, j) => (
                    <span key={j} className="text-xs border border-gray-600 text-gray-300 px-3 py-1 rounded-full font-medium">{t}</span>
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