import type { Category } from "@/shared/types/test"

export interface AttemptItem {
  id: string
  testId: string
  testTitle: string
  testCategory: Category
  pointsEarned: number
  totalPoints: number
  percentage: number
  timeTakenSeconds: number
  completedAt: string
  isPassed: boolean
}

export interface DashboardStats {
  totalTestsTaken: number
  averageScore: number
  testsCreated: number
  recentActivity: string
}