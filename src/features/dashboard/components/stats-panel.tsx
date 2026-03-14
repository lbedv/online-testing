import { StatCard } from "./stat-card"
import { STAT_ICON_MAP, DEFAULT_STAT_ICON} from "../constants"

interface StatItem {
  statKey: string
  value: string
}

interface StatsPanelProps {
  stats: StatItem[]
}
/**
 * StatsPanel component - Renders a grid of dashboard statistics with loading and error states.
 * Maps stat data from the hook to StatCard components with appropriate icons from STAT_ICON_MAP.
 */
export function StatsPanel({ stats }: StatsPanelProps) {

  const items = stats.map((s) => {
    const iconCfg = STAT_ICON_MAP[s.statKey] ?? DEFAULT_STAT_ICON
    return {
        ...s,
        ...iconCfg,
    }
  })

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((stat) => (
        <StatCard key={stat.statKey} {...stat} />
      ))}
    </div>
  )
}