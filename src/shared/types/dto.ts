export interface UserBasicInfoDTO {
  firstName: string;
  lastName: string;
}

export interface UserProfileDTO extends UserBasicInfoDTO {
  email: string;
  registeredAt: string;
}

export interface DashboardStatsDTO {
  totalTestsTaken: number
  averageScore: number
  testsCreated: number
  recentActivity: string
}

export interface AttemptDTO {
  id: string
  testId: string
  testTitle: string
  testCategory: string
  score: number
  totalPoints: number
  timeTakenSeconds: number
  completedAt: string
  passed: boolean
}