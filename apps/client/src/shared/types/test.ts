// TODO (Backend Refactor): Move consts to a separate file, types to shared zod schemas
import type { SelectOption } from "./common";

/** Indicates whether test is created by user or shared publicly */
export type TestOwnership = "mine" | "public"

/** Difficulty levels of a test */
export const TEST_DIFFICULTIES = [
    "easy",
    "medium",
    'hard',
] as const;

export type Difficulty = (typeof TEST_DIFFICULTIES)[number]

export const DIFFICULTY_LABELS = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
} satisfies Record<Difficulty, string>;

export const DIFFICULTY_OPTIONS: SelectOption[] = TEST_DIFFICULTIES.map(
    (difficulty) => ({
        value: difficulty,
        label: DIFFICULTY_LABELS[difficulty],
    })
);

/** Available test categories */
export const TEST_CATEGORIES = [
  "general_knowledge",
  "mathematics",
  "linguistics",
  "physics",
  "chemistry",
  "biology",
  "history",
  "geography",
  "economics",
  "programming",
  "data_science",
  "medicine",
  "law",
  "music",
  "art",
  "other",
] as const;

export type Category = (typeof TEST_CATEGORIES)[number];

export const CATEGORY_LABELS = {
  general_knowledge: "General Knowledge",
  mathematics:       "Math",
  linguistics:       "Language & Linguistics",
  physics:           "Physics",
  chemistry:         "Chemistry",
  biology:           "Biology",
  history:           "History",
  geography:         "Geography",
  economics:         "Economics",
  programming:       "Coding / Programming",
  data_science:      "Data Science",
  medicine:          "Medicine",
  law:               "Law",
  music:             "Music",
  art:               "Art",
  other:             "Other",
} satisfies Record<Category, string>;

export const CATEGORY_OPTIONS: SelectOption[] = TEST_CATEGORIES.map(
  (category) => ({
    value: category,
    label: CATEGORY_LABELS[category], 
  })
);