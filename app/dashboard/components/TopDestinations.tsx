"use client";

interface Destination {
  rank: number;
  name: string;
  visitors: number;
  change: number;
  image: string;
}

interface TopDestinationsProps {
  destinations: Destination[];
  title: string;
}

export default function TopDestinations({
  destinations,
  title,
}: TopDestinationsProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {destinations.map((dest) => (
          <div
            key={dest.rank}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">
              {dest.rank}
            </div>
            <div className="text-2xl shrink-0">{dest.image}</div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{dest.name}</p>
              <p className="text-sm text-gray-500">
                {dest.visitors.toLocaleString()}명 방문
              </p>
            </div>
            <span
              className={`text-sm font-medium ${
                dest.change >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {dest.change >= 0 ? "+" : ""}
              {dest.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
