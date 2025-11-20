
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, GitCommitHorizontal } from "lucide-react";

const activityGroups = {
  Today: [
    {
      title: "New co-packer matched for Project Sunrise",
      timestamp: "2 hours ago",
      category: "Match",
      color: "text-green-500",
    },
    {
      title: "Proposal sent for Project Moonshot",
      timestamp: "4 hours ago",
      category: "Proposal",
      color: "text-blue-500",
    },
  ],
  "This Week": [
    {
      title: "Regulatory red flag for Project Comet",
      timestamp: "3 days ago",
      category: "Regulatory",
      color: "text-red-500",
    },
    {
      title: "Internal update on Q3 budget",
      timestamp: "5 days ago",
      category: "Internal Update",
      color: "text-gray-500",
    },
  ],
  Older: [
    {
      title: "AI suggests new material for Project Nebula",
      timestamp: "2 weeks ago",
      category: "AI Suggestion",
      color: "text-purple-500",
    },
  ],
};

export function RecentActivity() {
  return (
    <Card className="shadow-sm rounded-xl">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {Object.entries(activityGroups).map(([groupTitle, activities]) => (
            <div key={groupTitle}>
              <h3 className="text-lg font-semibold mb-4">{groupTitle}</h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <GitCommitHorizontal className={activity.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {activity.timestamp}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 ${activity.color}`}
                      >
                        {activity.category}
                      </span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
