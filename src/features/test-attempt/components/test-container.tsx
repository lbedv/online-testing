import { TestHeader } from "./test-header"
import { TestNavigation } from "./test-navigation"
import { useTestTimer } from "../hooks/use-test-timer"
import { useTestManager } from "../hooks/use-test-manager"
import type { TestClientView } from "../types";

interface TestContainerProps {
  test: TestClientView
}

export function TestContainer({ test }: TestContainerProps) {

  const {
    currentIndex,
    questionsCount,
    answeredCount,
    goToNextQuestion,
    goToPrevQuestion,
  } = useTestManager(
    test.questions
  )

  const { timeRemaining } = useTestTimer(test.timeLimitSeconds)


  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TestHeader
        testTitle={test.testTitle}
        testCategory={test.testCategory}
        testDifficulty={test.testDifficulty}
        timeRemaining={timeRemaining}
        answeredCount={answeredCount}
        questionsCount={questionsCount}
      />

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
