"use client";

import StatCard from "./components/StatCard";
import BarChart from "./components/BarChart";
import MonthlyChart from "./components/MonthlyChart";
import DonutChart from "./components/DonutChart";
import TopDestinations from "./components/TopDestinations";
import RecentActivity from "./components/RecentActivity";

// --- Sample Data ---

const monthlyVisitorData = [
  { month: "1월", domestic: 1250000, international: 420000 },
  { month: "2월", domestic: 980000, international: 380000 },
  { month: "3월", domestic: 1480000, international: 510000 },
  { month: "4월", domestic: 1720000, international: 620000 },
  { month: "5월", domestic: 1890000, international: 580000 },
  { month: "6월", domestic: 1650000, international: 540000 },
  { month: "7월", domestic: 2100000, international: 780000 },
  { month: "8월", domestic: 2350000, international: 850000 },
  { month: "9월", domestic: 1780000, international: 630000 },
  { month: "10월", domestic: 1950000, international: 710000 },
  { month: "11월", domestic: 1420000, international: 490000 },
  { month: "12월", domestic: 1150000, international: 450000 },
];

const regionData = [
  { label: "서울", value: 4250000, color: "#3B82F6" },
  { label: "부산", value: 2180000, color: "#10B981" },
  { label: "제주", value: 3420000, color: "#F59E0B" },
  { label: "경주", value: 1560000, color: "#EF4444" },
  { label: "강릉", value: 1890000, color: "#8B5CF6" },
  { label: "여수", value: 1120000, color: "#EC4899" },
  { label: "전주", value: 980000, color: "#06B6D4" },
];

const visitorTypeData = [
  { label: "관광/레저", value: 8450000, color: "#3B82F6" },
  { label: "비즈니스", value: 2340000, color: "#10B981" },
  { label: "교육/연수", value: 1280000, color: "#F59E0B" },
  { label: "의료관광", value: 680000, color: "#EF4444" },
  { label: "기타", value: 1450000, color: "#8B5CF6" },
];

const topDestinations = [
  { rank: 1, name: "제주 올레길", visitors: 892000, change: 12.5, image: "🏝️" },
  { rank: 2, name: "서울 경복궁", visitors: 784000, change: 8.3, image: "🏛️" },
  { rank: 3, name: "부산 해운대", visitors: 671000, change: -2.1, image: "🏖️" },
  { rank: 4, name: "강릉 커피거리", visitors: 523000, change: 18.7, image: "☕" },
  { rank: 5, name: "전주 한옥마을", visitors: 498000, change: 5.4, image: "🏘️" },
];

const recentActivities = [
  {
    id: 1,
    type: "booking" as const,
    message: "제주도 패키지 여행 예약 1,247건 신규 접수",
    time: "10분 전",
  },
  {
    id: 2,
    type: "review" as const,
    message: "경복궁 투어 프로그램 평점 4.8점 달성",
    time: "32분 전",
  },
  {
    id: 3,
    type: "event" as const,
    message: "2026 부산 불꽃축제 사전 등록 시작",
    time: "1시간 전",
  },
  {
    id: 4,
    type: "alert" as const,
    message: "강릉 지역 숙박 시설 만실 예상 경고",
    time: "2시간 전",
  },
  {
    id: 5,
    type: "booking" as const,
    message: "외국인 관광객 K-컬처 투어 356건 예약",
    time: "3시간 전",
  },
  {
    id: 6,
    type: "review" as const,
    message: "전주 한옥마을 체험 프로그램 후기 120건 등록",
    time: "4시간 전",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                관
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  관광 대시보드
                </h1>
                <p className="text-xs text-gray-500">Tourism Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                마지막 업데이트: 2026년 2월 24일
              </span>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-medium">
                관
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            대한민국 관광 현황
          </h2>
          <p className="text-gray-500 mt-1">
            2026년 실시간 관광 통계 및 분석 데이터
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="총 방문객 수"
            value="14,200,000"
            change="12.3%"
            changeType="up"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
          />
          <StatCard
            title="관광 수입"
            value="₩8.7조"
            change="8.5%"
            changeType="up"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
          <StatCard
            title="외국인 관광객"
            value="5,960,000"
            change="15.2%"
            changeType="up"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
          <StatCard
            title="평균 체류일"
            value="3.8일"
            change="0.3일"
            changeType="down"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <MonthlyChart
            data={monthlyVisitorData}
            title="월별 방문객 추이 (2025)"
          />
          <BarChart data={regionData} title="지역별 관광객 수" />
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <DonutChart
            data={visitorTypeData}
            title="방문 목적별 분포"
            centerLabel="총 방문객"
            centerValue="14.2M"
          />
          <TopDestinations
            destinations={topDestinations}
            title="인기 관광지 TOP 5"
          />
          <RecentActivity
            activities={recentActivities}
            title="최근 활동"
          />
        </div>

        {/* Footer */}
        <footer className="mt-12 py-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-400">
            © 2026 관광 대시보드. 데이터 출처: 한국관광공사 (샘플 데이터)
          </p>
        </footer>
      </main>
    </div>
  );
}
