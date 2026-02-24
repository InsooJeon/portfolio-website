"use client";

interface DonutChartProps {
  data: { label: string; value: number; color: string }[];
  title: string;
  centerLabel?: string;
  centerValue?: string;
}

export default function DonutChart({
  data,
  title,
  centerLabel,
  centerValue,
}: DonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = 80;
  const strokeWidth = 24;
  const circumference = 2 * Math.PI * radius;

  let currentOffset = 0;
  const segments = data.map((item) => {
    const percentage = item.value / total;
    const dashLength = percentage * circumference;
    const dashOffset = -currentOffset;
    currentOffset += dashLength;
    return { ...item, percentage, dashLength, dashOffset };
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="flex items-center gap-6">
        <div className="relative w-48 h-48 shrink-0">
          <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
            {segments.map((seg, i) => (
              <circle
                key={i}
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${seg.dashLength} ${circumference - seg.dashLength}`}
                strokeDashoffset={seg.dashOffset}
                className="transition-all duration-500"
              />
            ))}
          </svg>
          {centerLabel && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">
                {centerValue}
              </span>
              <span className="text-xs text-gray-500">{centerLabel}</span>
            </div>
          )}
        </div>
        <div className="space-y-3 flex-1">
          {segments.map((seg, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: seg.color }}
                />
                <span className="text-sm text-gray-600">{seg.label}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-gray-900">
                  {seg.value.toLocaleString()}
                </span>
                <span className="text-xs text-gray-400 ml-1">
                  ({(seg.percentage * 100).toFixed(1)}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
