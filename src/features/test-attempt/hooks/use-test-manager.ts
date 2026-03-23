import { useCallback, useState } from "react";
import type { AnswerSubmitView } from "@/shared/types/answer";
import type { QuestionClientView } from "../types";

export function useTestManager(questionsFromDB: QuestionClientView[]) {
  /**
   * Holds user answers for each question (keyed by questionId).
   * Initialized once from the provided questions.
  */
  const [answersRecord, setAnswersRecord] = useState<Record<string, AnswerSubmitView>>(() => {
    const initialState: Record<string, AnswerSubmitView> = {};

    questionsFromDB.forEach((q) => {
    initialState[q.questionId] = {
      questionType: q.answer.questionType,
      userAnswer: undefined,
    } as AnswerSubmitView;
    });

    return initialState;
  });

  // Store/update answer for a specific question.
  const setAnswer = useCallback((
    questionId: string, 
    value: AnswerSubmitView["userAnswer"]
  ) => {
    setAnswersRecord((prev) => {
      const current = prev[questionId];
      if (!current) return prev;
      return {
        ...prev,
        [questionId]: {
          ...current,
          userAnswer: value,
        } as AnswerSubmitView,
      };
    });
  }, []);

  //Index of the currently displayed question.
  const [currentIndex, setCurrentIndex] = useState(0);
  const questionsCount = questionsFromDB.length;
  const currentQuestion = questionsFromDB[currentIndex]

  /**
   * Safe setter that clamps index into valid range.
   * Prevents out-of-bounds access everywhere else.
  */
  const setSafeCurrentIndex = useCallback(
    (value: number | ((prev: number) => number)) => {
      setCurrentIndex((prev) => {
        const next = typeof value === "function" ? value(prev) : value;
        const max = questionsCount - 1;

        return Math.min(Math.max(next, 0), max);
      });
    },
    [questionsCount]
  );

  // Navigation functions to move between questions.
  const goToNextQuestion = useCallback(() => {
    setSafeCurrentIndex((prev) => prev + 1);
  }, [setSafeCurrentIndex]);

  const goToPrevQuestion = useCallback(() => {
    setSafeCurrentIndex((prev) => prev - 1);
  }, [setSafeCurrentIndex]);

  // Derived "answered" state for all questions
  const answeredCount = Object.values(answersRecord).filter(
    (a) => a.userAnswer !== undefined
  ).length;

  const isAnswered = useCallback(
    (questionId: string) => {
      return answersRecord[questionId]?.userAnswer !== undefined;
    },
    [answersRecord]
  );

  return {
    // State
    currentIndex,
    currentQuestion,
    currentAnswer: answersRecord[currentQuestion.questionId]["userAnswer"],
    // Counts
    questionsCount,
    answeredCount,
    // Handlers
    setAnswer,
    setSafeCurrentIndex,
    goToNextQuestion,
    goToPrevQuestion,
    isAnswered,
  };
};