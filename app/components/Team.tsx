const teamMembers = [
  {
    name: "Simon Kim",
    role: "General Partner",
    bio: "Web3 / AI 크로스오버 투자 10년. 이전에 Kakao, Naver에서 프로덕트 리드.",
    initials: "SK",
    color: "from-violet-500 to-purple-600",
    twitter: "@simonkim_nft",
  },
  {
    name: "Jane Park",
    role: "Partner, Portfolio",
    bio: "포트폴리오 운영 및 성장 지원 총괄. Stanford MBA, McKinsey 출신.",
    initials: "JP",
    color: "from-blue-500 to-cyan-600",
    twitter: "@janepark_vc",
  },
  {
    name: "Minjun Lee",
    role: "Partner, Engineering",
    bio: "창업자 출신 엔지니어링 파트너. 전 CTO 2회, YC S20.",
    initials: "ML",
    color: "from-emerald-500 to-teal-600",
    twitter: "@minjun_builds",
  },
  {
    name: "Yuna Choi",
    role: "Venture Scout",
    bio: "글로벌 딜소싱 담당. 서울/싱가포르 생태계 연결.",
    initials: "YC",
    color: "from-pink-500 to-rose-600",
    twitter: "@yuna_scout",
  },
];

const advisors = [
  { name: "Dr. Sarah Chen", role: "AI Research, MIT CSAIL" },
  { name: "Carlos Rivera", role: "Ex-CTO, Stripe" },
  { name: "Yuki Tanaka", role: "Partner, a16z Crypto" },
  { name: "Aditya Sharma", role: "Founder, Polygon" },
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">팀 소개</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            창업자 출신 투자자들이 함께합니다. 우리는 직접 만들어봤기에 더 잘 도울 수 있습니다.
          </p>
        </div>

        {/* Core team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="glass-card hover-card rounded-2xl p-6 text-center">
              {/* Avatar */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-xl font-bold mx-auto mb-4`}
              >
                {member.initials}
              </div>
              <h3 className="font-bold text-white text-lg">{member.name}</h3>
              <p className="text-violet-400 text-sm mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
              <span className="text-gray-500 text-xs">{member.twitter}</span>
            </div>
          ))}
        </div>

        {/* Advisors */}
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-8 text-center text-gray-300">어드바이저</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold mx-auto mb-3 text-gray-400">
                  {advisor.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <p className="text-white text-sm font-medium">{advisor.name}</p>
                <p className="text-gray-500 text-xs mt-1">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
