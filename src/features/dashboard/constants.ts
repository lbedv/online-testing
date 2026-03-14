import type { LucideIcon } from "lucide-react"
import { FileText, TrendingUp, Clock, Award } from "lucide-react"

export const ITEMS_PER_PAGE = 6

/**
 * Maps dashboard stat keys to their corresponding icon and color configuration.
 * Used to display statistics consistently with semantic colors.
 */
export const STAT_ICON_MAP: Record<
  string,
  {
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor: string;
    iconBg: string;
  }
> = {
  "total-tests-taken": {
    title: "Total Tests Taken",
    description: 'All time completed tests',
    icon: FileText,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  "average-score": {
    title: "Average Score",
    description: 'Across all users',
    icon: TrendingUp,
    iconColor: "text-success",
    iconBg: "bg-success/10",
  },
  "tests-created": {
    title: "Tests Created",
    description: 'Total tests created by you',
    icon: Award,
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
  },
  "recent-activity": {
    title: "Recent Activity",
    description: 'Last test taken',
    icon: Clock,
    iconColor: "text-warning",
    iconBg: "bg-warning/10",
  },
}

/** Fallback icon config for unknown stat keys */
export const DEFAULT_STAT_ICON = {
  title : "",
  icon: FileText,
  iconColor: "text-muted-foreground",
  iconBg: "bg-muted/10",
}