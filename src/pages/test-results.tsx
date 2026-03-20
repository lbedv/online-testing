import { Separator } from "@/components/ui/separator"
import {
  ScoreCard,
  ResultsPanel,
  ResultsHeader,
  ResultsActions,
  useTestResults,
} from "@/features/test-results"

export function TestResultsPage() {
  const { items } = useTestResults()


  return (
    <div className="min-h-screen bg-background">
      <ResultsHeader testTitle={items.testTitle} />
      
      <main className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col gap-8">
          <section aria-label="Score summary">
            <ScoreCard result={items} />
          </section>
          <section aria-label="Question breakdown">
            <ResultsPanel questions={items.questions} />
          </section>
          <Separator />
          <ResultsActions testId={items.testId} />
        </div>
      </main>
    </div>
  )
}
