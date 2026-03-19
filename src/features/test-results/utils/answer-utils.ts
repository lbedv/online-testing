import type { QuestionResult } from "../types";

export function countAnswerOutcomes(questions: QuestionResult[]) {
  return {
    correct: questions.filter((q) => q.answerOutcome === "correct").length,
    incorrect: questions.filter((q) => q.answerOutcome === "incorrect").length,
    skipped: questions.filter((q) => q.answerOutcome === "skipped").length,
  }
}