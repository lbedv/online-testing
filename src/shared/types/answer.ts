type AnswerValueMap = {
  numeric: number;
  trueFalse: boolean;
  multipleChoice: string[];
  textInput: string;
};

export type QuestionType = keyof AnswerValueMap;

type BaseAnswer<T extends QuestionType> = {
  questionType: T;
};


export type AnswerTest = {
  [K in QuestionType]: BaseAnswer<K> & {
    correctAnswer: AnswerValueMap[K];
  };
}[QuestionType];


export type AnswerAttempt = {
  [K in QuestionType]: BaseAnswer<K> & {
    userAnswer?: AnswerValueMap[K];
  };
}[QuestionType];

export type AnswerResult = {
  [K in QuestionType]: BaseAnswer<K> & {
    correctAnswer: AnswerValueMap[K];
    userAnswer?: AnswerValueMap[K];
  };
}[QuestionType];