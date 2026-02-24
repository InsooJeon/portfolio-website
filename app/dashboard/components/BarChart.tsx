"use client";

interface BarChartProps {
  data: { label: string; value: number; color: string }[];
  title: string;
  maxValue?: number;
}

export default function BarChart({ data, title, maxValue }: BarChartProps) {
  const max = maxValue || Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-sm text-gray-600 w-20 shrink-0 text-right">
              {item.label}
            </span>
            <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
              <div
                className="h-full rounded-full flex items-center pl-3 transition-all duration-700"
                style={{
                  width: `${(item.value / max) * 100}%`,
                  backgroundColor: item.color,
                  minWidth: "40px",
                }}
              >
                <span className="text-white text-xs font-medium">
                  {item.value.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
