"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    idea: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로컬 테스트용 — 실제 제출 없이 성공 상태로 전환
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
            Apply
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">지원하기</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Due: 2025년 2월 19일 · 선발 팀에게만 개별 연락드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="glass-card rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-3xl mb-6">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">지원 완료!</h3>
                <p className="text-gray-400">
                  서류를 검토한 후 개별적으로 연락드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">이름 *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">이메일 *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors"
                    placeholder="hello@startup.io"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">회사/프로젝트명</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors"
                    placeholder="My Startup Inc."
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">한 줄 아이디어 *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.idea}
                    onChange={(e) => setForm({ ...form, idea: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                    placeholder="어떤 문제를 풀고 있나요? 커밋 로그나 라이브 URL이 있다면 함께 적어주세요."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-violet-500/25"
                >
                  지원서 제출하기 →
                </button>
                <p className="text-xs text-gray-600 text-center">
                  ※ 로컬 테스트용 — 실제로 전송되지 않습니다.
                </p>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">지원 자격</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  "AI를 핵심 제품에 활용 중인 팀",
                  "사이드 프로젝트 단계도 환영",
                  "법인 여부 무관 (선발 후 설립 가능)",
                  "국적/위치 무관 (서울 베이스 우대)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-violet-400 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">투자 조건</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-gray-400 text-sm">투자 금액</span>
                  <span className="text-white font-medium">₩1억</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-gray-400 text-sm">지분율</span>
                  <span className="text-white font-medium">5%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-gray-400 text-sm">추가 투자</span>
                  <span className="text-white font-medium">최대 ₩1억</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-400 text-sm">기간</span>
                  <span className="text-white font-medium">8주</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-2">문의</h3>
              <p className="text-gray-400 text-sm">vibelabs@hashed.com</p>
              <p className="text-gray-500 text-xs mt-2">
                업무일 기준 48시간 내 답변드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
