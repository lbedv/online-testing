import { useState, useEffect } from "react"

export function useTestTimer(initialTime: number) {
  const [timeRemaining, setTimeRemaining] = useState<number>(initialTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((t) => Math.max(0, t - 1))
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return { timeRemaining }
}