import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  description: string
  value: string
  icon: LucideIcon
  iconColor: string
  iconBg: string
}

/**
 * StatCard component - Displays a single dashboard statistic with icon and label.
 * Shows a numeric value with description text and an icon in a colored background.
 */
export function StatCard({
    title,
    description,
    value,
    icon,
    iconColor,
    iconBg
}: StatCardProps) {
  const Icon = icon
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconBg}`}>
          <Icon className={`h-4 w-4 ${iconColor}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
