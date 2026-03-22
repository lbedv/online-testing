import type { DashboardStatsDTO, DashboardAttemptDTO, UserProfileDTO } from "@/shared/types/dto"

export const PROFILE_INFO: UserProfileDTO = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  registeredAt: "2024-03-05T09:30:00Z",
}

export const DASHBOARD_STATS: DashboardStatsDTO = {
  totalTestsTaken: 24,
  averageScore: 78,
  testsCreated: 8,
  recentActivity: "2026-03-12T10:15:00Z"
}

export const RECENT_ATTEMPTS: DashboardAttemptDTO[] = [
  {
    id: "attempt_001",
    testId: "test_007",
    testTitle: "Modern JavaScript & TypeScript – Mid 2025 Level",
    testCategory: "programming",
    pointsEarned: 24,
    totalPoints: 36,
    percentage: 66.7,
    timeTakenSeconds: 438,
    completedAt: "2026-03-22T17:42:19Z",
    isPassed: true,
  },

  {
    id: "attempt_002",
    testId: "test_007",
    testTitle: "Modern JavaScript & TypeScript – Mid 2025 Level",
    testCategory: "programming",
    pointsEarned: 21,
    totalPoints: 36,
    percentage: 58.3,
    timeTakenSeconds: 512,
    completedAt: "2026-03-20T14:15:33Z",
    isPassed: false,
  },

  {
    id: "attempt_003",
    testId: "test_010",
    testTitle: "Random Knowledge Battle – Mixed Bag #7",
    testCategory: "general_knowledge",
    pointsEarned: 68,
    totalPoints: 100,
    percentage: 68.0,
    timeTakenSeconds: 1147,
    completedAt: "2026-03-18T21:09:44Z",
    isPassed: true,
  },

  {
    id: "attempt_004",
    testId: "test_002",
    testTitle: "JavaScript & TypeScript Core Concepts",
    testCategory: "programming",
    pointsEarned: 29,
    totalPoints: 38,
    percentage: 76.3,
    timeTakenSeconds: 682,
    completedAt: "2026-03-15T10:22:01Z",
    isPassed: true,
  },

  {
    id: "attempt_005",
    testId: "test_004",
    testTitle: "Organic Chemistry – Functional Groups & Reactions",
    testCategory: "chemistry",
    pointsEarned: 18,
    totalPoints: 45,
    percentage: 40.0,
    timeTakenSeconds: 948,
    completedAt: "2026-03-12T19:37:55Z",
    isPassed: false,
  },

  {
    id: "attempt_006",
    testId: "test_009",
    testTitle: "SQL for Data Analysts – Window Functions & CTEs",
    testCategory: "data_science",
    pointsEarned: 22,
    totalPoints: 28,
    percentage: 78.6,
    timeTakenSeconds: 761,
    completedAt: "2026-03-10T13:04:12Z",
    isPassed: true,
  },

  {
    id: "attempt_007",
    testId: "test_007",
    testTitle: "Modern JavaScript & TypeScript – Mid 2025 Level",
    testCategory: "programming",
    pointsEarned: 12,
    totalPoints: 36,
    percentage: 33.3,
    timeTakenSeconds: 289,
    completedAt: "2026-03-08T22:51:07Z",
    isPassed: false,
  },

  {
    id: "attempt_008",
    testId: "test_001",
    testTitle: "World Capitals – Quick Fire",
    testCategory: "geography",
    pointsEarned: 42,
    totalPoints: 50,
    percentage: 84.0,
    timeTakenSeconds: 312,
    completedAt: "2026-03-05T08:19:40Z",
    isPassed: true,
  },

  {
    id: "attempt_009",
    testId: "test_008",
    testTitle: "Ancient Civilizations – Mesopotamia to Rome",
    testCategory: "history",
    pointsEarned: 31,
    totalPoints: 55,
    percentage: 56.4,
    timeTakenSeconds: 859,
    completedAt: "2026-03-02T16:45:22Z",
    isPassed: false,
  },

  {
    id: "attempt_010",
    testId: "test_006",
    testTitle: "1980s & 1990s Music Trivia",
    testCategory: "music",
    pointsEarned: 54,
    totalPoints: 60,
    percentage: 90.0,
    timeTakenSeconds: 411,
    completedAt: "2026-02-28T23:17:09Z",
    isPassed: true,
  },
];