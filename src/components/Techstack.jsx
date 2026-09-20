const stacks = [
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    color: "from-blue-500 to-blue-700",
    items: ["Python", "PyTorch", "Scikit-learn", "Pandas", "OpenCV", "YOLOv8", "Haar Cascade"],
  },
  {
    icon: "🖥️",
    title: "Web Development",
    color: "from-purple-500 to-purple-700",
    items: ["React", "FastAPI", "Uvicorn", "C#", "ASP.NET", "Tailwind CSS"],
  },
  {
    icon: "🗄️",
    title: "Tools & Architecture",
    color: "from-indigo-500 to-indigo-700",
    items: ["Git/GitHub", "Docker", "Figma", "Lucidchart", "UML Design", "SDLC"],
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="px-8 py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-3 tracking-tight text-white">Technical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Arsenal</span></h2>
        <p className="text-slate-400 mb-14 text-lg">The tools and technologies I use to bring ideas to life, from model training to backend deployment and frontend design.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stacks.map((s, i) => (
            <div key={i} className="relative bg-slate-900 rounded-2xl p-7 text-white border border-slate-800 hover:border-slate-600 transition-all duration-300 group overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
              <div className={`w-12 h-12 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg`}>
                {s.icon}
              </div>
              <h3 className="text-lg font-bold mb-5">{s.title}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item, j) => (
                  <span key={j} className="text-sm bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 font-medium">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}