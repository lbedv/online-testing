import { formatRelativeTime, formatDuration } from "@/shared/lib/date";
import { RECENT_ATTEMPTS } from '../mock-data';

export function useAttemptsList() {
    const items = RECENT_ATTEMPTS.map((attempt) => {
        return {
        id: attempt.id,
        testId: attempt.testId,
        testTitle: attempt.testTitle,
        testCategory: attempt.testCategory,
        score: attempt.score,
        totalPoints: attempt.totalPoints,
        percentage: Math.round((attempt.score / attempt.totalPoints) * 100),
        timeTaken: formatDuration(attempt.timeTakenSeconds),
        completedAt: formatRelativeTime(attempt.completedAt),
        passed: attempt.passed
        };
    });
    
    return { items }
}