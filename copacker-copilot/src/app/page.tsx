
import { KpiCard } from "@/components/dashboard/kpi-card";
import { ProjectProgress } from "@/components/dashboard/project-progress";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { ConversationTracker } from "@/components/dashboard/conversation-tracker";
import { AiCopilotSummary } from "@/components/dashboard/ai-copilot-summary";
import {
  Briefcase,
  TrendingUp,
  Zap,
  FileText,
  BarChart2,
  Flag,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="relative flex min-h-screen">
      <div className="flex-1 space-y-6 pr-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">At a Glance</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <KpiCard
              title="Active Projects"
              metric="12"
              icon={<Briefcase className="h-4 w-4 text-muted-foreground" />}
            />
            <KpiCard
              title="Negotiations in Progress"
              metric="4"
              icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
            />
            <KpiCard
              title="Regulatory Red Flags"
              metric="1"
              icon={<Flag className="h-4 w-4 text-muted-foreground" />}
            />
            <KpiCard
              title="New Matches"
              metric="3"
              icon={<Zap className="h-4 w-4 text-muted-foreground" />}
            />
            <KpiCard
              title="Launch Success Rate"
              metric="92%"
              icon={<BarChart2 className="h-4 w-4 text-muted-foreground" />}
            />
            <KpiCard
              title="Feasibility Score Average"
              metric="8.1"
              icon={<FileText className="h-4 w-4 text-muted-foreground" />}
            />
          </div>
        </section>

        <section>
          <ProjectProgress />
        </section>

        <section>
          <RecentActivity />
        </section>

        <section>
          <ConversationTracker />
        </section>
      </div>

      <aside className="w-1/4 sticky top-6 self-start">
        <AiCopilotSummary />
      </aside>
    </div>
  );
}
