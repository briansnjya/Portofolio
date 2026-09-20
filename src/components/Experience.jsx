const experiences = [
  {
    period: "2026 – Present",
    org: "Binus Game Development Club (BGDC)",
    role: "Project Manager (PM) & Activist",
    points: [
      "Event Management: Led the committee and drafted proposals, timelines, and MoA for an industrial visit to Busy Beaver Studio.",
      "Community Mentoring: Acted as a speaker and facilitator for the 'Create Your Own World!' game dev workshop at PKBM Binar.",
      "Public Relations: Designed public communication materials and documentation for internal events.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative px-8 py-28 bg-slate-950 overflow-hidden border-t border-slate-900">
      {/* Subtle glowing center */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pink-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-black mb-3 tracking-tight text-white">Leadership & <span className="text-purple-400">Experience</span></h2>
        <p className="text-slate-400 mb-14 text-lg">Beyond the code, I actively participate in organizations to develop project management and communication skills.</p>
        <div className="space-y-6">
          {experiences.map((e, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-wider bg-blue-900/30 px-3 py-1 rounded-full mb-3">{e.period}</span>
                <p className="font-black text-lg leading-tight mb-1 text-white">{e.org}</p>
                <p className="text-slate-400 text-sm italic">{e.role}</p>
              </div>
              <ul className="md:col-span-2 space-y-4">
                {e.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0 font-bold">→</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}