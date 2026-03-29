import type { QuestionResultView } from "../types";
import type { AnswerResultView } from "@/shared/types/answer";

/**
 * countAnswerOutcomes - Utility function to count the number of correct, incorrect, and skipped answers in a list of question results.
 * @param questions - An array of QuestionResultView objects representing the results of each question.
 * @returns An object containing the counts of correct, incorrect, and skipped answers.
 */
export function countAnswerOutcomes(questions: QuestionResultView[]) {
  return {
    correct: questions.filter((q) => q.answerOutcome === "correct").length,
    incorrect: questions.filter((q) => q.answerOutcome === "incorrect").length,
    skipped: questions.filter((q) => q.answerOutcome === "skipped").length,
  }
}

/**
 * formatAnswers - Utility function to format the user's answer and the correct answer for display in the results breakdown.
 * Handles different question types (numeric, true/false, multiple choice, text input) and accounts for skipped questions.
 */
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