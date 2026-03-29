import { TestContainer, useGetTest } from "@/features/test-attempt";

// TestAttemptPage component - The main page for taking a test, rendering the TestContainer with the test data.
export function TestAttemptPage () {
  const data = useGetTest()

  return (
      <div>
      <TestContainer
          test={data}
      />
      </div>
  )
} 