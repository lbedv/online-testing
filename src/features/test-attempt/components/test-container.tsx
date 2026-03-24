import { TestHeader } from "./test-header"
import { QuestionGrid } from './question-grid';
import { ActiveQuestionRenderer } from "./active-question-renderer"
import { TestNavigation } from "./test-navigation"
import { useTestTimer } from "../hooks/use-test-timer"
import { useTestManager } from "../hooks/use-test-manager"
import { useQuestionGrid } from "../hooks/use-question-grid";
import type { TestClientView } from "../types";

interface TestContainerProps {
  test: TestClientView
}

export function TestContainer({ test }: TestContainerProps) {

  const {
    // State
    currentIndex,
    currentQuestion,
    currentAnswer,
    // Counts
    questionsCount,
    answeredCount,
    // Handlers
    setAnswer,
    setSafeCurrentIndex,
    goToNextQuestion,
    goToPrevQuestion,
    isAnswered
  } = useTestManager(
    test.questions
  )

  const { timeRemaining } = useTestTimer(test.timeLimitSeconds)
  const gridProps = useQuestionGrid(
    test.questions, 
    currentIndex, 
    setSafeCurrentIndex
  );

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

      <div className="flex-1 flex flex-col px-4 py-6">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-2xl">
            <ActiveQuestionRenderer
              currentQuestion={currentQuestion}
              currentIndex={currentIndex}
              questionsCount={questionsCount}
              currentAnswer={currentAnswer}
              setAnswer={setAnswer}
            />
          </div>
        </div>
        <div className="mt-6">
          <QuestionGrid
            {...gridProps}
            currentIndex={currentIndex}
            isAnswered={isAnswered}
          />
        </div>
      </div>

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
