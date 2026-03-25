// TODO (Backend Refactor): Move consts to a separate file, types to shared zod schemas

// Maps each question type to the shape of its answer
export type AnswerMap = {
  numeric: number;
  trueFalse: boolean;
  multipleChoice: string[];
  textInput: string;
};

// Union type of all possible question types
export type QuestionType = keyof AnswerMap;

// Represents a single selectable option used in multiple choice questions
type QuestionOption = {
  id: string;
  label: string; 
};

type BaseAnswer<T extends QuestionType> = {
  questionType: T;
};

type WithCorrect<T extends QuestionType> = BaseAnswer<T> & {
  correctAnswer: AnswerMap[T];
};

type WithUserAnswer<T extends QuestionType> = BaseAnswer<T> & {
  userAnswer?: AnswerMap[T];
};

type WithOptions<T extends QuestionType> = T extends 'multipleChoice'
  ? { options: QuestionOption[] }
  : { options?: never };

// Data sent to client for rendering a question
export type AnswerClientView = {
  [K in QuestionType]: BaseAnswer<K> & WithOptions<K>;
}[QuestionType];

// Data stored in the database
// Always includes the correct answer
export type AnswerDbView = {
  [K in QuestionType]: WithCorrect<K> & WithOptions<K>;
}[QuestionType];

// Data submitted by the user
// Contains only the user's answer
export type AnswerSubmitView = {
  [K in QuestionType]: WithUserAnswer<K>; 
}[QuestionType];

// Full result view after evaluation
// Combines correct answer, user answer, and options (if applicable)
export type AnswerResultView = {
  [K in QuestionType]: WithCorrect<K> & WithUserAnswer<K> & WithOptions<K>;
}[QuestionType];

// Human-readable labels for each question type
export const QUESTION_TYPE_LABELS = {
  multipleChoice: "Multiple Choice",
  trueFalse: "True / False",
  textInput: "Text Input",
  numeric: "Numeric",
} satisfies Record<QuestionType, string>;