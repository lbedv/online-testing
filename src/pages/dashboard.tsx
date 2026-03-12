import { WelcomeHeader, StatsPanel } from "@/features/dashboard"
import { Separator } from "@/components/ui/separator"
import { MOCK_SERVER_DATA } from "@/features/dashboard/mock-data"

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <WelcomeHeader firstName="John" lastName="Doe" />
      <StatsPanel stats={MOCK_SERVER_DATA} />
      <Separator />
    </div>
  )
}