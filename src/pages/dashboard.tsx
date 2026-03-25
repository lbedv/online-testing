import { WelcomeHeader, StatsPanel, AttemptsList } from "@/features/dashboard"
import { Separator } from "@/components/ui/separator"
import { useDashboardStats, useAttemptsList, useUserInfo } from "@/features/dashboard/"

// DashboardPage component - The main dashboard view for logged-in users.
// Displays a welcome header, key statistics, and recent test attempts.
export function DashboardPage() {
  const { items: stats } = useDashboardStats()
  const { items: attempts } = useAttemptsList()
  const { items: userInfo } = useUserInfo()

  return (
    <div className="flex flex-col gap-8">
      <WelcomeHeader {...userInfo} />
      <StatsPanel stats={stats} />
      <Separator />
      <AttemptsList attempts={attempts} />
    </div>
  )
}