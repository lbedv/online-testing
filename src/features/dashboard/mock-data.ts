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