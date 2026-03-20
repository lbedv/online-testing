import { type TestResult } from "./types"; // Adjust import as needed

export const MOCK_TEST_RESULT: TestResult = {
  resultId: "res_987654321",
  testId: "test_intro_to_js",
  testTitle: "JavaScript Fundamentals Quiz",
  testCategory: "Programming",
  testDifficulty: "Beginner",
  
  // Aggregated Stats
  pointsEarned: 25,
  totalPoints: 40,
  percentage: 62.5,
  timeTakenSeconds: 845,
  isPassed: true,
  completedAt: "2026-01-10T12:00:00Z",
  
  // Detailed Breakdown
  questions: [
    {
      questionId: "q_001",
      questionNumber: 1,
      questionText: "What is the result of 10 + 5?",
      answerOutcome: "correct",
      pointsEarned: 10,
      pointsPossible: 10,
      answer: {
        questionType: "numeric",
        userAnswer: 15,
        correctAnswer: 15,
      },
    },
    {
      questionId: "q_002",
      questionNumber: 2,
      questionText: "JavaScript is a statically typed language.",
      answerOutcome: "incorrect",
      pointsEarned: 0,
      pointsPossible: 10,
      answer: {
        questionType: "trueFalse",
        userAnswer: true, // User guessed true
        correctAnswer: false, // The real answer is false
      },
    },
    {
      questionId: "q_003",
      questionNumber: 3,
      questionText: "Which of the following are valid ways to declare a variable in ES6?",
      answerOutcome: "correct",
      pointsEarned: 15,
      pointsPossible: 15,
      answer: {
        questionType: "multipleChoice",
        options: [
          { id: "opt_1", label: "let" },
          { id: "opt_2", label: "const" },
          { id: "opt_3", label: "var" },
          { id: "opt_4", label: "function" }
        ],
        userAnswer: ["opt_1", "opt_2"],
        correctAnswer: ["opt_1", "opt_2"],
      },
    },
    {
      questionId: "q_004",
      questionNumber: 4,
      questionText: "What function is used to print content to the console?",
      answerOutcome: "skipped",
      pointsEarned: 0,
      pointsPossible: 5,
      answer: {
        questionType: "textInput", // User skipped this question!
        correctAnswer: "console.log()",
      },
    },
  ],
};