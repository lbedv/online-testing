import { TestNavigation } from "./test-navigation"
import { useTestManager } from "../hooks/use-test-manager"
import type { TestClientView } from "../types";

interface TestContainerProps {
  test: TestClientView
}

export function TestContainer({ test }: TestContainerProps) {

  const {
    currentIndex,
    questionsCount,
    goToNextQuestion,
    goToPrevQuestion,
  } = useTestManager(
    test.questions
  )
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TestNavigation
        currentIndex={currentIndex}
        questionsCount={questionsCount}
        goToPrevQuestion={goToPrevQuestion}
        goToNextQuestion={goToNextQuestion}
        onSubmit={() => {}}
      />
    </div>
  )
}
