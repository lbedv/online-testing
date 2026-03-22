// TODO (Backend Refactor): Move consts to a separate file, types to shared zod schemas
export type AnswerMap = {
  numeric: number;
  trueFalse: boolean;
  multipleChoice: string[];
  textInput: string;
};

export type QuestionType = keyof AnswerMap;

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

export type AnswerClientView = {
  [K in QuestionType]: BaseAnswer<K> & WithOptions<K>;
}[QuestionType];

export type AnswerDbView = {
  [K in QuestionType]: WithCorrect<K> & WithOptions<K>;
}[QuestionType];

export type AnswerSubmitView = {
  [K in QuestionType]: WithUserAnswer<K>; 
}[QuestionType];

export type AnswerResultView = {
  [K in QuestionType]: WithCorrect<K> & WithUserAnswer<K> & WithOptions<K>;
}[QuestionType];

export const QUESTION_TYPE_LABELS = {
  multipleChoice: "Multiple Choice",
  trueFalse: "True / False",
  textInput: "Text Input",
  numeric: "Numeric",
} satisfies Record<QuestionType, string>;