import { Badge } from "@/components/ui/badge"
import type { Difficulty } from "@/shared/types/test"
import { DIFFICULTY_BADGE_STYLES } from "../constants"

interface DifficultyBadgeProps {
  difficulty: Difficulty
}

/**
 * DifficultyBadge component - Colored badge displaying test difficulty level.
 * Uses color-coded styling: green for easy, yellow for medium, red for hard.
 */
export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const { style, label } = DIFFICULTY_BADGE_STYLES[difficulty]
  return <Badge className={style}>{label}</Badge>
}
