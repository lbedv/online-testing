import type { AnswerResult } from "@/shared/types/answer";

export type ScoreStatus = "excellent" | "passed" | "failed"

export type AnswerOutcome = "correct" | "incorrect" | "skipped"

export interface QuestionResult {
  questionId: string
  questionText: string;
  questionNumber: number;
  answerOutcome: AnswerOutcome;
  pointsEarned: number;
  pointsPossible: number;
  answer: AnswerResult
}

/**
 * Complete test result with all metrics and individual question breakdowns.
 * Displayed on the results page after test submission.
 */
export interface TestResult {
  resultId: string
  testId: string
  testTitle: string
  testCategory: string
  testDifficulty: string
  pointsEarned: number
  totalPoints: number
  percentage: number
  timeTakenSeconds: number
  completedAt: string
  isPassed: boolean
  questions: QuestionResult[]
}
