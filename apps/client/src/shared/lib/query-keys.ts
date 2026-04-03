export const queryKeys = {
  dashboard: {
    stats: () => ["dashboard", "stats"] as const,
    attempts: () => ["dashboard", "attempts"] as const,
  },
  catalog: {
    list: (filters: Record<string, unknown>) =>
      ["catalog", "list", filters] as const,
  },
  attempt: {
    detail: (id: string) => ["attempt", "detail", id] as const,
  },
  results: {
    detail: (attemptId: string) => ["results", "detail", attemptId] as const,
  },
  profile: {
    me: () => ["profile", "me"] as const,
  },
} as const
