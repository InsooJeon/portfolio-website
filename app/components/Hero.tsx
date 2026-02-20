"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Deep ambient blobs ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main violet center glow */}
        <div
          className="blob absolute"
          style={{
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(109,40,217,0.22) 0%, transparent 70%)",
            animationDelay: "0s",
          }}
        />
        {/* Blue left */}
        <div
          className="blob absolute"
          style={{
            top: "35%",
            left: "5%",
            width: 480,
            height: 380,
            background:
              "radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
        {/* Emerald right */}
        <div
          className="blob absolute"
          style={{
            bottom: "15%",
            right: "5%",
            width: 420,
            height: 320,
            background:
              "radial-gradient(ellipse, rgba(16,185,129,0.1) 0%, transparent 70%)",
            animationDelay: "4s",
          }}
        />
        {/* Small pink top-right accent */}
        <div
          className="blob absolute"
          style={{
            top: "8%",
            right: "15%",
            width: 200,
            height: 200,
            background:
              "radial-gradient(ellipse, rgba(236,72,153,0.1) 0%, transparent 70%)",
            animationDelay: "1.5s",
          }}
        />
      </div>

      {/* ── Grid overlay ────────────────────────────────── */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* ── Radial vignette (darkens edges) ─────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(8,8,8,0.85) 100%)",
        }}
      />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-card text-sm text-gray-300 mb-10 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-gray-200 font-medium">2025 Spring Cohort</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-400">모집 중</span>
        </div>

        {/* Headline */}
        <h1
          className="text-6xl md:text-[82px] font-bold leading-[1.06] tracking-[-0.03em] mb-7 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Where vibes
          <br />
          become{" "}
          <span className="gradient-text">rocket</span>
          <br />
          <span className="text-white/85">products</span>
        </h1>

        {/* Sub */}
        <p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.25s", fontWeight: 400 }}
        >
          AI를 동료로 쓰는 창업자에게,{" "}
          <span className="text-gray-300">자본보다 빠른 신뢰와 유통</span>을
          제공하는 8주 프로그램.
          <br />
          직원 10명으로 시총 10조를 만드는 시대를 함께합니다.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}
        >
          <a
            href="#contact"
            className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-base"
          >
            지금 지원하기 →
          </a>
          <a
            href="#about"
            className="glass-card px-8 py-4 rounded-full text-gray-300 hover:text-white font-medium text-base transition-all duration-300 hover:border-violet-500/30 hover:bg-white/5"
          >
            프로그램 소개
          </a>
        </div>

        {/* Stats row */}
        <div
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-0 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            { value: "₩1억", label: "선발 즉시 투자" },
            { value: "8주", label: "집중 빌딩 기간" },
            { value: "5%", label: "지분 조건" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center px-10 py-2">
                <div className="text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1 tracking-wide">
                  {stat.label}
                </div>
              </div>
              {i < 2 && (
                <div className="h-10 w-px bg-white/8 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
