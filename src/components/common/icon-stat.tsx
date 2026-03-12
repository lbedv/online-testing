import { cn } from "@/lib/utils"

interface IconStatProps {
  icon: React.ReactNode
  value: string | number
  className?: string
}

export function IconStat({
  icon,
  value,
  className,
}: IconStatProps) {
  return (
    <span className={cn("flex items-center gap-1.5 text-xs text-muted-foreground", className)}>
      <span className="h-3.5 w-3.5 shrink-0">{icon}</span>
      {value}
    </span>
  )
}
