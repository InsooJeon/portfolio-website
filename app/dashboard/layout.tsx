import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "관광 대시보드 — Tourism Dashboard",
  description: "대한민국 관광 현황 실시간 대시보드",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
