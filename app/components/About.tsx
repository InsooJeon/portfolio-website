export default function About() {
  const features = [
    {
      icon: "⚡",
      title: "문서가 아닌 빌딩",
      description:
        "PT 덱과 사업계획서가 아니라 커밋 로그와 라이브 URL로 증명합니다. 실제 작동하는 제품을 만드는 것이 우선입니다.",
    },
    {
      icon: "🤝",
      title: "선발과 동시에 투자",
      description:
        "선발되는 순간 ₩1억이 투자됩니다. 검증이 아닌 신뢰를 먼저 드립니다. 추가 ₩1억은 빌드 기간 중 지원 가능합니다.",
    },
    {
      icon: "🚀",
      title: "AI Native 창업",
      description:
        "AI를 도구가 아닌 팀원으로 씁니다. 소수의 팀으로도 수십 배의 레버리지를 만드는 방법을 함께 탐구합니다.",
    },
    {
      icon: "🌐",
      title: "글로벌 네트워크",
      description:
        "서울, 샌프란시스코, 싱가포르, 벵갈루루에 걸친 Hashed 네트워크를 통해 글로벌 유통 채널을 확보합니다.",
    },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
            About the Program
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            가장 빠른 창업자를 위한
            <br />
            <span className="text-gray-400">집중 프로그램</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            근본적 변화의 한가운데서 움직이는 창업자들에게 자본보다 빠른 신뢰와
            유통을 제공합니다.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card hover-card rounded-2xl p-8"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Program timeline */}
        <div className="mt-20 glass-card rounded-2xl p-10">
          <h3 className="text-2xl font-bold mb-10 text-center">프로그램 타임라인</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-blue-500 to-emerald-500" />
            <div className="space-y-8">
              {[
                { week: "Week 0", title: "선발 & 투자", desc: "선발과 동시에 ₩1억 투자 집행" },
                { week: "Week 1–2", title: "Problem Discovery", desc: "문제 정의, 사용자 인터뷰, 가설 수립" },
                { week: "Week 3–5", title: "Build & Ship", desc: "MVP 개발, 실 사용자 확보, 지표 측정" },
                { week: "Week 6–7", title: "Scale", desc: "성장 지표 기반 스케일링, 파트너사 연결" },
                { week: "Week 8", title: "Demo Day", desc: "글로벌 투자자 앞 라이브 데모 발표" },
              ].map((item, i) => (
                <div key={i} className="pl-12 relative">
                  <div className="absolute left-0 w-8 h-8 rounded-full glass-card border border-violet-500/30 flex items-center justify-center text-xs text-violet-400 font-bold">
                    {i + 1}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-violet-400 text-sm font-mono w-24 shrink-0">
                      {item.week}
                    </span>
                    <div>
                      <span className="font-semibold text-white">{item.title}</span>
                      <span className="text-gray-400 ml-3 text-sm">{item.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
