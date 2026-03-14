export interface AttemptItem {
  id: string
  testId: string
  testTitle: string
  testCategory: string
  score: number
  totalPoints: number
  percentage: number
  timeTaken: string
  completedAt: string
  passed: boolean
}
