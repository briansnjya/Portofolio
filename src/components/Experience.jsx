const experiences = [
  {
    period: "2026 – Present",
    org: "Game Development Club (BGDC)",
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
    <section id="experience" className="px-8 py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-3 tracking-tight">Leadership & <span className="text-purple-500">Experience</span></h2>
        <p className="text-gray-500 mb-14 text-lg">Beyond the code, I actively participate in organizations to develop project management and communication skills.</p>
        <div className="space-y-6">
          {experiences.map((e, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <span className="inline-block text-blue-600 text-xs font-bold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-3">{e.period}</span>
                <p className="font-black text-lg leading-tight mb-1">{e.org}</p>
                <p className="text-gray-500 text-sm italic">{e.role}</p>
              </div>
              <ul className="md:col-span-2 space-y-4">
                {e.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
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