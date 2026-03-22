import type { TestResultView } from "./types";

export const MOCK_TEST_RESULT: TestResultView = {
  resultId: "result-001",
  testId: "test-001",
  testTitle: "Mixed Knowledge Test",
  testCategory: "general_knowledge",
  testDifficulty: "medium",
  pointsEarned: 40,
  totalPoints: 60,
  percentage: 66.67,
  timeLimitSeconds: 1800,
  timeTakenSeconds: 720,
  completedAt: "2026-03-23T10:00:00Z",
  isPassed: true,
  questions: [
    {
      questionId: "q1",
      questionText: "What is the capital of France?",
      questionNumber: 1,
      answerOutcome: "correct",
      pointsEarned: 5,
      pointsPossible: 5,
      answer: {
        questionType: "textInput",
        correctAnswer: "Paris",
        userAnswer: "Paris"
      }
    },
    {
      questionId: "q2",
      questionText: "2 + 2 = ?",
      questionNumber: 2,
      answerOutcome: "correct",
      pointsEarned: 5,
      pointsPossible: 5,
      answer: {
        questionType: "numeric",
        correctAnswer: 4,
        userAnswer: 4
      }
    },
    {
      questionId: "q3",
      questionText: "The Earth is flat.",
      questionNumber: 3,
      answerOutcome: "correct",
      pointsEarned: 5,
      pointsPossible: 5,
      answer: {
        questionType: "trueFalse",
        correctAnswer: false,
        userAnswer: false
      }
    },
    {
      questionId: "q4",
      questionText: "Which of the following are programming languages?",
      questionNumber: 4,
      answerOutcome: "incorrect",
      pointsEarned: 0,
      pointsPossible: 5,
      answer: {
        questionType: "multipleChoice",
        correctAnswer: ["a", "c"],
        userAnswer: ["a", "b"],
        options: [
          { id: "a", label: "Python" },
          { id: "b", label: "HTML" },
          { id: "c", label: "Java" },
          { id: "d", label: "CSS" }
        ]
      }
    },
    {
      questionId: "q5",
      questionText: "What is the boiling point of water (°C)?",
      questionNumber: 5,
      answerOutcome: "correct",
      pointsEarned: 5,
      pointsPossible: 5,
      answer: {
        questionType: "numeric",
        correctAnswer: 100,
        userAnswer: 100
      }
    },
    {
      questionId: "q6",
      questionText: "Who wrote 'Romeo and Juliet'?",
      questionNumber: 6,
      answerOutcome: "incorrect",
      pointsEarned: 0,
      pointsPossible: 5,
      answer: {
        questionType: "textInput",
        correctAnswer: "William Shakespeare",
        userAnswer: "Charles Dickens"
      }
    },
    {
      questionId: "q7",
      questionText: "The Sun rises in the East.",
      questionNumber: 7,
      answerOutcome: "correct",
      pointsEarned: 5,
      pointsPossible: 5,
      answer: {
        questionType: "trueFalse",
        correctAnswer: true,
        userAnswer: true
      }
    },
    {
      questionId: "q8",
      questionText: "Select prime numbers.",
      questionNumber: 8,
      answerOutcome: "incorrect",
      pointsEarned: 0,
      pointsPossible: 5,
      answer: {
        questionType: "multipleChoice",
        correctAnswer: ["a", "b", "d"],
        userAnswer: ["a", "c"],
        options: [
          { id: "a", label: "2" },
          { id: "b", label: "3" },
          { id: "c", label: "4" },
          { id: "d", label: "5" }
        ]
      }
    },
    {
      questionId: "q9",
      questionText: "What is the chemical symbol for gold?",
      questionNumber: 9,
      answerOutcome: "correct",
      pointsEarned: 5,
      pointsPossible: 5,
      answer: {
        questionType: "textInput",
        correctAnswer: "Au",
        userAnswer: "Au"
      }
    },
    {
      questionId: "q10",
      questionText: "5 * 6 = ?",
      questionNumber: 10,
      answerOutcome: "correct",
      pointsEarned: 5,
      pointsPossible: 5,
      answer: {
        questionType: "numeric",
        correctAnswer: 30,
        userAnswer: 30
      }
    },
    {
      questionId: "q11",
      questionText: "Water is composed of hydrogen and oxygen.",
      questionNumber: 11,
      answerOutcome: "correct",
      pointsEarned: 5,
      pointsPossible: 5,
      answer: {
        questionType: "trueFalse",
        correctAnswer: true,
        userAnswer: true
      }
    },
    {
      questionId: "q12",
      questionText: "Select colors that are primary colors.",
      questionNumber: 12,
      answerOutcome: "skipped",
      pointsEarned: 0,
      pointsPossible: 5,
      answer: {
        questionType: "multipleChoice",
        correctAnswer: ["a", "c"],
        userAnswer: undefined,
        options: [
          { id: "a", label: "Red" },
          { id: "b", label: "Green" },
          { id: "c", label: "Blue" },
          { id: "d", label: "Yellow" }
        ]
      }
    }
  ]
};