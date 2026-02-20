const portfolioItems = [
  {
    name: "NeuralFlow",
    category: "AI Infrastructure",
    description: "엔터프라이즈 AI 워크플로우 자동화 플랫폼. 비개발자도 LLM 파이프라인을 구축할 수 있는 노코드 도구.",
    stage: "Series A",
    tags: ["AI", "B2B", "SaaS"],
    accent: "from-violet-500/20 to-purple-500/10",
    dot: "bg-violet-400",
  },
  {
    name: "ChainMed",
    category: "HealthTech × Web3",
    description: "온체인 의료 데이터 주권 플랫폼. 환자가 본인 데이터를 직접 소유하고 수익화할 수 있는 프로토콜.",
    stage: "Seed",
    tags: ["Web3", "Healthcare", "Data"],
    accent: "from-blue-500/20 to-cyan-500/10",
    dot: "bg-blue-400",
  },
  {
    name: "Crewmate",
    category: "Future of Work",
    description: "AI 팀원을 온보딩하는 HR 플랫폼. 인간-AI 협업 워크플로우를 설계하고 성과를 측정합니다.",
    stage: "Pre-seed",
    tags: ["AI", "HR", "Productivity"],
    accent: "from-emerald-500/20 to-teal-500/10",
    dot: "bg-emerald-400",
  },
  {
    name: "Locus",
    category: "Climate Tech",
    description: "탄소 크레딧 온체인 검증 및 거래소. MRV(측정-보고-검증) 프로세스를 자동화하는 인프라 레이어.",
    stage: "Seed",
    tags: ["Climate", "Web3", "DeFi"],
    accent: "from-orange-500/20 to-amber-500/10",
    dot: "bg-orange-400",
  },
  {
    name: "Storygen",
    category: "Creator Economy",
    description: "IP 소유권 기반 AI 스토리텔링 플랫폼. 창작자가 AI와 공동 창작하고 수익을 온체인으로 분배.",
    stage: "Series A",
    tags: ["AI", "NFT", "Creative"],
    accent: "from-pink-500/20 to-rose-500/10",
    dot: "bg-pink-400",
  },
  {
    name: "Banksy",
    category: "Fintech",
    description: "스타트업을 위한 AI 재무 파트너. 번 레이트, 런웨이, 시나리오 분석을 실시간으로 제공합니다.",
    stage: "Pre-seed",
    tags: ["Fintech", "AI", "B2B"],
    accent: "from-indigo-500/20 to-blue-500/10",
    dot: "bg-indigo-400",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            투자 포트폴리오
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Vibe Labs와 함께 세상을 바꾸고 있는 팀들입니다.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.name}
              className={`glass-card hover-card rounded-2xl p-6 bg-gradient-to-br ${item.accent}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-2 h-2 rounded-full ${item.dot}`} />
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                </div>
                <span className="text-xs px-2 py-1 rounded-full border border-white/10 text-gray-400">
                  {item.stage}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
