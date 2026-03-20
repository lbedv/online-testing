import type { QuestionResult } from "../types";
import type { AnswerResultView } from "@/shared/types/answer";


export function countAnswerOutcomes(questions: QuestionResult[]) {
  return {
    correct: questions.filter((q) => q.answerOutcome === "correct").length,
    incorrect: questions.filter((q) => q.answerOutcome === "incorrect").length,
    skipped: questions.filter((q) => q.answerOutcome === "skipped").length,
  }
}

export function formatAnswers(variant: AnswerResultView, isSkipped: boolean) {
  const noAnswerText = "No answer provided";

  switch (variant.questionType) {
    case "numeric":
      return {
        userText: isSkipped ? noAnswerText : String(variant.userAnswer),
        correctText: String(variant.correctAnswer),
      };
    case "trueFalse":
      return {
        userText: isSkipped ? noAnswerText : (variant.userAnswer ? "True" : "False"),
        correctText: variant.correctAnswer ? "True" : "False",
      };
    case "multipleChoice": {
      const getLabelsForIds = (ids: string[]) => {
        return ids.map(id => {
          const option = variant.options.find(opt => opt.id === id);
          return option ? option.label : id; 
        });
      };
      return {
        userText: isSkipped ? noAnswerText : getLabelsForIds(variant.userAnswer!),
        correctText: getLabelsForIds(variant.correctAnswer),
      };
    }
    case "textInput":
      return {
        userText: isSkipped ? noAnswerText : String(variant.userAnswer),
        correctText: variant.correctAnswer,
      };
  }
}