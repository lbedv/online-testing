import type { AnswerClientView } from "@/shared/types/answer"
import type { Category, Difficulty } from "@/shared/types/test";

export interface GridQuestion {
    id: string,
    number: number,
    originalIndex: number
}

export interface QuestionClientView {
  questionId: string
  questionText: string;
  questionNumber: number;
  pointsPossible: number;
  answer: AnswerClientView
}

export interface TestClientView {
  id: string
  testTitle: string
  testCategory: Category
  testDifficulty: Difficulty
  totalPoints: number
  timeLimitSeconds: number
  questions: QuestionClientView[]
}