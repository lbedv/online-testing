import { useState, useCallback } from "react"
import PathConstants from "@/routes/path-constants"
import { useNavigate } from "@tanstack/react-router"

export function useSubmitDialog ( attemptId: string) {
  const [showFinishDialog, setShowFinishDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = useCallback(() => {
    setShowFinishDialog(true)
  }, [])

  const handleConfirmSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowFinishDialog(false)
      navigate({ to:PathConstants.TEST_RESULTS, params: {id: attemptId}})
    }, 2000)
  }

  return {
    showFinishDialog,
    isLoading,
    setShowFinishDialog,
    handleConfirmSubmit,
    handleSubmit
  }
}