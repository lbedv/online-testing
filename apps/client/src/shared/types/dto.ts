// Future zod schemas
import type { Category, Difficulty, TestOwnership } from "./test";

// User profile DTO
export interface UserProfileDTO {
  firstName: string;
  lastName: string;
  email: string;
  registeredAt: string;
}

// Dashboard statistics DTO
export interface DashboardStatsDTO {
  totalTestsTaken: number
  averageScore: number
  testsCreated: number
  recentActivity: string
}

// Attempt DTO for listing user's attempts on the dashboard
export interface DashboardAttemptDTO {
  id: string
  testId: string
  testTitle: string
  testCategory: Category
  pointsEarned: number
  totalPoints: number
  percentage: number
  timeTakenSeconds: number
  completedAt: string
  isPassed: boolean
}

// Catalog test DTO for listing tests in the catalog
export interface CatalogTestDto {
  id: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  questionsCount: number
  attemptsCount: number
  timeLimitSeconds: number
  author: {
    firstName: string;
    lastName: string;
  };
  ownership: TestOwnership; 
  createdAt: string;
}