import { WelcomeHeader, StatsPanel, AttemptsList } from "@/features/dashboard"
import { Separator } from "@/components/ui/separator"
import { MOCK_SERVER_DATA, RECENT_ATTEMPTS } from "@/features/dashboard/mock-data"

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <WelcomeHeader firstName="John" lastName="Doe" />
      <StatsPanel stats={MOCK_SERVER_DATA} />
      <Separator />
      <AttemptsList attempts={RECENT_ATTEMPTS} />
    </div>
  )
}