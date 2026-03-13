import { Link } from "@tanstack/react-router"
import PathConstants from "@/routes/path-constants"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, RotateCcw, ArrowRight } from "lucide-react"
import { IconStat } from "@/components/common"
import { ScoreBadge } from "./score-badge"

interface AttemptCardProps {
  id: string
  testId: string
  testTitle: string
  testCategory: string
  score: number
  totalPoints: number
  percentage: number
  timeTaken: string
  completedAt: string
  passed: boolean
}

/**
 * AttemptCard component - Card displaying a single test attempt with score and progress.
 * Shows test title, score percentage with progress bar, time taken, and completion date.
 * Provides buttons to review detailed results or retake the test.
 */
export function AttemptCard({
    id,
    testId,
    testTitle,
    testCategory,
    score,
    totalPoints,
    percentage,
    timeTaken,
    completedAt,
    passed
}: AttemptCardProps) {

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-semibold leading-snug">
            {testTitle}
          </CardTitle>
          <ScoreBadge percentage={percentage} passed={passed} />
        </div>
        <CardDescription className="text-sm leading-relaxed">
          {testCategory}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 pb-3">
        {/* Display score and progress bar */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Score</span>
          <span className="font-semibold text-foreground">
            {score}/{totalPoints}
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className={`h-full rounded-full transition-all ${
              passed ? "bg-success" : "bg-destructive"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="mt-1 flex justify-between items-center gap-4">
          <IconStat
            icon={<Clock className="h-3.5 w-3.5" />}
            value={timeTaken}
          />
          <span className="text-xs text-muted-foreground">
            {completedAt}
          </span>
        </div>
      </CardContent>

      <CardFooter className="mt-auto gap-2 pt-0">
        <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
          <Link
            to={PathConstants.TEST_RESULTS}
            params={{ id: id }}
            >
            <ArrowRight className="mr-1.5 h-3.5 w-3.5" />
            Review
          </Link>
        </Button>
        <Button asChild size="sm" className="flex-1">
          <Link
            to={PathConstants.TEST_ATTEMPT}
            params={{ id: testId }}
            >
            <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
            Retake
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
