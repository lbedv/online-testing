import { type Difficulty } from "@/shared/types/test"
import type { SelectOption } from "@/shared/types/common"
import type { SortOption } from "./types"

export const ITEMS_PER_PAGE = 6

export const OPTION_ALL = "ALL"

export const SORT_OPTIONS: SelectOption<SortOption>[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "attempts", label: "Attempts" },
];

export const DIFFICULTY_STYLES = {
  easy: "success",
  medium: "warning",
  hard: "destructive",
} satisfies Record<Difficulty, "success" | "warning" | "destructive">;