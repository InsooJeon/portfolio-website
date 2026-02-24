"use client";

interface MonthlyChartProps {
  data: { month: string; domestic: number; international: number }[];
  title: string;
}

export default function MonthlyChart({ data, title }: MonthlyChartProps) {
  const maxValue = Math.max(
    ...data.map((d) => Math.max(d.domestic, d.international))
  );

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-sm text-gray-600">내국인</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-sm text-gray-600">외국인</span>
          </div>
        </div>
      </div>
      <div className="flex items-end gap-2 h-52">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex gap-0.5 items-end h-44">
              <div
                className="flex-1 bg-blue-500 rounded-t-md transition-all duration-500 hover:bg-blue-600"
                style={{
                  height: `${(item.domestic / maxValue) * 100}%`,
                  minHeight: "4px",
                }}
                title={`내국인: ${item.domestic.toLocaleString()}명`}
              />
              <div
                className="flex-1 bg-emerald-500 rounded-t-md transition-all duration-500 hover:bg-emerald-600"
                style={{
                  height: `${(item.international / maxValue) * 100}%`,
                  minHeight: "4px",
                }}
                title={`외국인: ${item.international.toLocaleString()}명`}
              />
            </div>
            <span className="text-xs text-gray-500">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
