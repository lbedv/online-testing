import { DASHBOARD_STATS } from "../mock-data";
import { formatRelativeTime } from "@/shared/lib/date";

export function useDashboardStats() {
  const items = [
      { statKey: "total-tests-taken", value: String(DASHBOARD_STATS.totalTestsTaken) },
      { statKey: "average-score", value: `${DASHBOARD_STATS.averageScore}%` },
      { statKey: "tests-created", value: String(DASHBOARD_STATS.testsCreated) },
      { statKey: "recent-activity", value: formatRelativeTime(DASHBOARD_STATS.recentActivity) },
    ];

  return { items }
}