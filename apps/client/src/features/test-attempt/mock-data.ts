import type { TestClientView } from "./types";

export const MOCK_TEST_CLIENT: TestClientView = {
  id: "test-001",
  testTitle: "Mixed Knowledge Test",
  testCategory: "general_knowledge",
  testDifficulty: "medium",
  totalPoints: 60,
  timeLimitSeconds: 1800,
  questions: [
    {
      questionId: "q1",
      questionText: "What is the capital of France?",
      questionNumber: 1,
      pointsPossible: 5,
      answer: {
        questionType: "textInput"
      }
    },
    {
      questionId: "q2",
      questionText: "2 + 2 = ?",
      questionNumber: 2,
      pointsPossible: 5,
      answer: {
        questionType: "numeric"
      }
    },
    {
      questionId: "q3",
      questionText: "The Earth is flat.",
      questionNumber: 3,
      pointsPossible: 5,
      answer: {
        questionType: "trueFalse"
      }
    },
    {
      questionId: "q4",
      questionText: "Which of the following are programming languages?",
      questionNumber: 4,
      pointsPossible: 5,
      answer: {
        questionType: "multipleChoice",
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
      pointsPossible: 5,
      answer: {
        questionType: "numeric"
      }
    },
    {
      questionId: "q6",
      questionText: "Who wrote 'Romeo and Juliet'?",
      questionNumber: 6,
      pointsPossible: 5,
      answer: {
        questionType: "textInput"
      }
    },
    {
      questionId: "q7",
      questionText: "The Sun rises in the East.",
      questionNumber: 7,
      pointsPossible: 5,
      answer: {
        questionType: "trueFalse"
      }
    },
    {
      questionId: "q8",
      questionText: "Select prime numbers.",
      questionNumber: 8,
      pointsPossible: 5,
      answer: {
        questionType: "multipleChoice",
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
      pointsPossible: 5,
      answer: {
        questionType: "textInput"
      }
    },
    {
      questionId: "q10",
      questionText: "5 * 6 = ?",
      questionNumber: 10,
      pointsPossible: 5,
      answer: {
        questionType: "numeric"
      }
    },
    {
      questionId: "q11",
      questionText: "Water is composed of hydrogen and oxygen.",
      questionNumber: 11,
      pointsPossible: 5,
      answer: {
        questionType: "trueFalse"
      }
    },
    {
      questionId: "q12",
      questionText: "Select colors that are primary colors.",
      questionNumber: 12,
      pointsPossible: 5,
      answer: {
        questionType: "multipleChoice",
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