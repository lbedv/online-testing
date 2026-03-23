import { TestContainer, useGetTest } from "@/features/test-attempt";

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