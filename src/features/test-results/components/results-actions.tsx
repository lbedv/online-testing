import { Link } from "@tanstack/react-router"
import PathConstants from "@/routes/path-constants"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RotateCcw } from "lucide-react"

interface ResultsActionsProps {
  testId: string
}

export function ResultsActions({ testId }: ResultsActionsProps) {
  return (
    <div className="flex flex-col items-center gap-3 pb-8 sm:flex-row sm:justify-center">
      <Button
        asChild
        variant="outline"
        className="gap-1.5 w-full sm:w-auto"
      >
        <Link
          to={PathConstants.TEST_ATTEMPT}
          params={{ id: testId }}
        >
          <RotateCcw className="h-4 w-4" />
          Retake Test
        </Link>
      </Button>

      <Button
        asChild
        variant="secondary"
        className="gap-1.5 w-full sm:w-auto"
      >
        <Link to={PathConstants.INDEX}>
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>
    </div>
  )
}