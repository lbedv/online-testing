import type { Category, Difficulty, TestOwnership } from "./test";

export interface UserProfileDTO {
  firstName: string;
  lastName: string;
  email: string;
  registeredAt: string;
}

export interface DashboardStatsDTO {
  totalTestsTaken: number
  averageScore: number
  testsCreated: number
  recentActivity: string
}

export interface AttemptDTO {
  id: string
  testId: string
  testTitle: string
  testCategory: string
  score: number
  totalPoints: number
  timeTakenSeconds: number
  completedAt: string
  passed: boolean
}

export interface CatalogTestDto {
  id: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  questionsCount: number
  attemptsCount: number
  author: {
    firstName: string;
    lastName: string;
  };
  ownership: TestOwnership; 
  createdAt: string;
}