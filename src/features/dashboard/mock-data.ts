export interface DashboardStatDTO {
  statKey: string
  value: number | string
}

export const MOCK_SERVER_DATA: DashboardStatDTO[] = [
  { statKey: "total-tests-taken", value: 24 },
  { statKey: "average-score", value: 78 },
  { statKey: "tests-created", value: 8 },
  { statKey: "recent-activity", value: "2026-03-12T10:15:00Z" },
]

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

export const RECENT_ATTEMPTS: AttemptDTO[] = [
  {
    id: "a1",
    testId: "1",
    testTitle: "JavaScript Fundamentals",
    testCategory: "Programming",
    score: 27,
    totalPoints: 30,
    timeTakenSeconds: 1122,
    completedAt: "2026-03-12T16:26:00Z",
    passed: true,
  },
  {
    id: "a2",
    testId: "2",
    testTitle: "React Component Patterns",
    testCategory: "Frontend",
    score: 19,
    totalPoints: 25,
    timeTakenSeconds: 1335,
    completedAt: "2026-03-11T14:00:00Z",
    passed: true,
  },
  {
    id: "a3",
    testId: "4",
    testTitle: "TypeScript Advanced Types",
    testCategory: "Programming",
    score: 12,
    totalPoints: 22,
    timeTakenSeconds: 1800,
    completedAt: "2026-03-10T10:15:00Z",
    passed: false,
  },
  {
    id: "a4",
    testId: "6",
    testTitle: "SQL & Database Basics",
    testCategory: "Databases",
    score: 18,
    totalPoints: 20,
    timeTakenSeconds: 873,
    completedAt: "2026-03-09T09:45:00Z",
    passed: true,
  },
  {
    id: "a5",
    testId: "1",
    testTitle: "JavaScript Fundamentals",
    testCategory: "Programming",
    score: 22,
    totalPoints: 30,
    timeTakenSeconds: 1510,
    completedAt: "2026-03-07T11:20:00Z",
    passed: true,
  },
  {
    id: "a6",
    testId: "4",
    testTitle: "TypeScript Advanced Types",
    testCategory: "Programming",
    score: 9,
    totalPoints: 22,
    timeTakenSeconds: 1735,
    completedAt: "2026-03-05T08:30:00Z",
    passed: false,
  },
  {
    id: "a6",
    testId: "4",
    testTitle: "TypeScript Advanced Types",
    testCategory: "Programming",
    score: 9,
    totalPoints: 22,
    timeTakenSeconds: 1735,
    completedAt: "2026-03-05T08:30:00Z",
    passed: false,
  },
];