import { useState } from "react"
import type { AnswerOutcome, QuestionResultView } from "../types"
import { countAnswerOutcomes } from "../utils/answer-utils";

/**
 * useQuestionsFilter hook - Manages filtering of question results based on answer outcomes.
 * Provides state for the current filter and a function to update it.
 */
export function useQuestionsFilter(questions: QuestionResultView[]) {
  const [filter, setFilter] = useState<AnswerOutcome | undefined>(undefined)

  const filtered = questions.filter((q) => {
    return filter ? q.answerOutcome === filter : true;
  })

  const counts = countAnswerOutcomes(questions)

  return { filter, setFilter, filtered, counts }
}