import {
  ResultsHeader,
  useTestResults,
} from "@/features/test-results"

export function TestResultsPage() {
  const { items } = useTestResults()


  return (
    <div className="min-h-screen bg-background">
      <ResultsHeader testTitle={items.testTitle} />
    </div>
  )
}
