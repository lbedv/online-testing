import type { AnswerClientView } from "@/shared/types/answer"
import type { Category, Difficulty } from "@/shared/types/test";

// GridQuestion interface - Represents a question in the grid layout of the test attempt UI
export interface GridQuestion {
    id: string,
    number: number,
    originalIndex: number
}

// Client view of a question, as received from the backend, used for rendering in the test attempt UI
export interface QuestionClientView {
  questionId: string
  questionText: string;
  questionNumber: number;
  pointsPossible: number;
  answer: AnswerClientView
}

// Client view of a test, as received from the backend, used for rendering in the test attempt UI
export interface TestClientView {
  id: string
  testTitle: string
  testCategory: Category
  testDifficulty: Difficulty
  totalPoints: number
  timeLimitSeconds: number
  questions: QuestionClientView[]
}