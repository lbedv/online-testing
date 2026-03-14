/** Difficulty levels of a test */
export const DIFFICULTY_OPTIONS = ["easy", "medium", "hard"] as const
export type Difficulty = (typeof DIFFICULTY_OPTIONS)[number]

/** Indicates whether test is created by user or shared publicly */
export const TEST_OWNERSHIPS = ["mine", "public"] as const
export type TestOwnership = (typeof TEST_OWNERSHIPS)[number]

/** Available test categories */
export const CATEGORY_OPTIONS = [
  "web-development",
  "javascript",
  "typescript",
  "react",
  "css",
  "node-js",
  "databases",
  "devops",
  "general-knowledge",
] as const
export type Category = (typeof CATEGORY_OPTIONS)[number]