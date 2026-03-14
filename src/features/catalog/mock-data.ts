import type { CatalogTestDto } from "@/shared/types/dto";

// Mock data for tests in the catalog
export const CATALOG_TESTS: CatalogTestDto[] = [
  {
    id: "pub-1",
    title: "HTML5 Semantic Elements",
    description:
      "Test your understanding of semantic HTML5 elements and their proper usage in modern web development.",
    category: "web-development",
    difficulty: "easy",
    questionsCount: 15,
    attemptsCount: 312,
    author: {
        firstName: "Sarah",
        lastName: "Chen"
    },
    ownership: "public",
    createdAt: "2026-01-10T12:00:00Z",
  },
  {
    id: "pub-2",
    title: "Advanced React Hooks",
    description:
      "Deep dive into useReducer, useMemo, useCallback, and custom hooks. For experienced React developers.",
    category: "react",
    difficulty: "hard",
    questionsCount: 20,
    attemptsCount: 198,
    author: {
        firstName: "Mike",
        lastName: "Torres"
    },
    ownership: "public",
    createdAt: "2026-02-15T15:30:00Z",
  },
  {
    id: "pub-3",
    title: "Git & Version Control",
    description:
      "Branching strategies, merge conflicts, rebasing, and collaborative workflows using Git.",
    category: "devops",
    difficulty: "medium",
    questionsCount: 18,
    attemptsCount: 456,
    author: {
        firstName: "Alex",
        lastName: "Rivera"
    },
    ownership: "public",
    createdAt: "2026-01-20T09:00:00Z",
  },
  {
    id: "pub-4",
    title: "CSS Animations & Transitions",
    description:
      "Keyframes, transforms, transition timing, and performance considerations for smooth CSS animations.",
    category: "css",
    difficulty: "medium",
    questionsCount: 16,
    attemptsCount: 87,
    author: {
        firstName: "Jordan",
        lastName: "Lee"
    },
    ownership: "public",
    createdAt: "2026-02-20T14:00:00Z",
  },
  {
    id: "pub-5",
    title: "JavaScript ES6+ Features",
    description:
      "Arrow functions, destructuring, modules, generators, symbols, and other modern JavaScript features.",
    category: "javascript",
    difficulty: "easy",
    questionsCount: 24,
    attemptsCount: 521,
    author: {
        firstName: "Priya",
        lastName: "Patel"
    },
    ownership: "public",
    createdAt: "2026-01-25T11:30:00Z",
  },
  {
    id: "pub-6",
    title: "Docker Fundamentals",
    description:
      "Containers, images, Dockerfiles, networking, and compose for local development environments.",
    category: "devops",
    difficulty: "medium",
    questionsCount: 20,
    attemptsCount: 234,
    author: {
        firstName: "Chris",
        lastName: "Wu"
    },
    ownership: "public",
    createdAt: "2026-02-28T10:00:00Z",
  },
  {
    id: "mine-1",
    title: "TypeScript Advanced Types",
    description:
      "Generics, conditional types, mapped types, infer, utility types, and template literal types.",
    category: "typescript",
    difficulty: "hard",
    questionsCount: 22,
    attemptsCount: 18,
    author: { firstName: "You", lastName: "" },
    ownership: "mine",
    createdAt: "2026-03-05T18:45:00Z",
  },
  {
    id: "mine-2",
    title: "React Query & TanStack Query Basics",
    description:
      "Queries, mutations, invalidation, optimistic updates, pagination, and error handling.",
    category: "react",
    difficulty: "medium",
    questionsCount: 16,
    attemptsCount: 24,
    author: { firstName: "You", lastName: "" },
    ownership: "mine",
    createdAt: "2026-02-10T09:15:00Z",
  },
  {
    id: "mine-3",
    title: "Tailwind CSS Best Practices",
    description:
      "Utility-first mindset, component composition, custom themes, responsive design, and performance tips.",
    category: "css",
    difficulty: "easy",
    questionsCount: 14,
    attemptsCount: 41,
    author: { firstName: "You", lastName: "" },
    ownership: "mine",
    createdAt: "2026-03-01T14:20:00Z",
  },
  {
    id: "mine-4",
    title: "JavaScript Performance Optimization",
    description:
      "Event delegation, throttling/debouncing, memory leaks, Big O in practice, and V8 engine quirks.",
    category: "javascript",
    difficulty: "medium",
    questionsCount: 19,
    attemptsCount: 15,
    author: { firstName: "You", lastName: "" },
    ownership: "mine",
    createdAt: "2026-01-28T11:00:00Z",
  }
]