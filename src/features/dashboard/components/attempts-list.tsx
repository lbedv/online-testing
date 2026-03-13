import { Link } from "@tanstack/react-router"
import PathConstants from "@/routes/path-constants"
import { Button } from "@/components/ui/button"
import { Pagination } from "@/components/common"
import { AttemptCard } from "./attempt-card"
import { formatDuration, formatRelativeTime } from "@/lib/date"
import { usePagination } from "@/hooks/use-pagination"
import { ITEMS_PER_PAGE } from "../constants"

interface AttemptItem {
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

interface AttemptsListProps{
  attempts: AttemptItem[]
}

export function AttemptsList({ attempts }: AttemptsListProps) {
  const items = attempts.map((attempt) => {
    const percentage = Math.round((attempt.score / attempt.totalPoints) * 100)
    const timeTaken = formatDuration(attempt.timeTakenSeconds)
    const completedAt = formatRelativeTime(attempt.completedAt)
    return {
      ...attempt,
      percentage,
      timeTaken,
      completedAt
    }
  })

  const { paginatedItems, currentPage, totalPages, setCurrentPage } = 
    usePagination(items, ITEMS_PER_PAGE)

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Recent Attempts</h2>
        <Button asChild variant="outline" size="sm">
            <Link to={PathConstants.CATALOG}>
              Browse Tests
            </Link>
         </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {paginatedItems.map((item) => (
          <AttemptCard key={item.id} {...item} />
        ))}
      </div>

      <div className="mt-4">
        <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
      </div>
    </section>
  )
}