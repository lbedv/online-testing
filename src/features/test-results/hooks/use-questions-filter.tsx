import { useState } from "react"
import type { AnswerOutcome, QuestionResult } from "../types"
import { countAnswerOutcomes } from "../utils/answer-utils";

export function useQuestionsFilter(questions: QuestionResult[]) {
  const [filter, setFilter] = useState<AnswerOutcome | undefined>(undefined)

  const filtered = questions.filter((q) => {
    return filter ? q.answerOutcome === filter : true;
  })

  const counts = countAnswerOutcomes(questions)

  return { filter, setFilter, filtered, counts }
}