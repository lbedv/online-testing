import type { AnswerResultView } from "@/shared/types/answer";
import type { Category, Difficulty } from "@/shared/types/test";

export type ScoreStatus = "excellent" | "passed" | "failed"

export type AnswerOutcome = "correct" | "incorrect" | "skipped"

export interface QuestionResultView {
  questionId: string
  questionText: string;
  questionNumber: number;
  answerOutcome: AnswerOutcome;
  pointsEarned: number;
  pointsPossible: number;
  answer: AnswerResultView
}

/**
 * Complete test result with all metrics and individual question breakdowns.
 * Displayed on the results page after test submission.
 */
export interface TestResultView {
  resultId: string
  testId: string
  testTitle: string
  testCategory: Category
  testDifficulty: Difficulty
  pointsEarned: number
  totalPoints: number
  percentage: number
  timeTakenSeconds: number
  timeLimitSeconds: number
  completedAt: string
  isPassed: boolean
  questions: QuestionResultView[]
}
