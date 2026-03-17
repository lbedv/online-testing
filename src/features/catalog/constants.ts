import type { Difficulty, Category } from "@/shared/types/test"
import type { SelectOption } from "@/shared/types/common"
import type { SortOption } from "./types"

export const ITEMS_PER_PAGE = 6

export const OPTION_ALL = "ALL"

export const DIFFICULTY_OPTIONS: SelectOption<Difficulty>[] = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

export const CATEGORY_OPTIONS: SelectOption<Category>[] = [
  { value: "web-development", label: "Web Development" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "react", label: "React" },
  { value: "css", label: "CSS" },
  { value: "node-js", label: "Node.js" },
  { value: "databases", label: "Databases" },
  { value: "devops", label: "DevOps" },
  { value: "general-knowledge", label: "General Knowledge" },
];

export const SORT_OPTIONS: SelectOption<SortOption>[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "attempts", label: "Attempts" },
];

export const DIFFICULTY_BADGE_STYLES: Record<Difficulty, { label: string, style: string} > = {
  easy: { label: "Easy", style: "border-transparent bg-success/15 text-success hover:bg-success/20" },
  medium: { label: "Medium", style: "border-transparent bg-warning/15 text-warning hover:bg-warning/20" },
  hard: { label: "Hard", style: "border-transparent bg-destructive/15 text-destructive hover:bg-destructive/20" },
}