"use client";

interface Activity {
  id: number;
  type: "booking" | "review" | "event" | "alert";
  message: string;
  time: string;
}

interface RecentActivityProps {
  activities: Activity[];
  title: string;
}

const typeConfig = {
  booking: { icon: "🎫", bg: "bg-blue-50", text: "text-blue-600" },
  review: { icon: "⭐", bg: "bg-yellow-50", text: "text-yellow-600" },
  event: { icon: "🎉", bg: "bg-purple-50", text: "text-purple-600" },
  alert: { icon: "⚠️", bg: "bg-red-50", text: "text-red-600" },
};

export default function RecentActivity({
  activities,
  title,
}: RecentActivityProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {activities.map((activity) => {
          const config = typeConfig[activity.type];
          return (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center shrink-0 text-lg`}
              >
                {config.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700">{activity.message}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
