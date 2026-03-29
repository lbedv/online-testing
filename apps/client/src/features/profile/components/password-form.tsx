import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Lock } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FormInput } from "@/components/common"
import { PasswordSchema, type PasswordFormData } from "../schemas"

/**
 * PasswordForm component - Form for changing user password.
 * Uses a mock API call and sonner for toast notifications.
 */
export function PasswordForm() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(PasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })

  const onSubmit = (data: PasswordFormData) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      reset(data)
      toast.success("Password updated successfully.", {
        position: "top-right"
      })
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Change Password</CardTitle>
        <CardDescription>
          Update your password to keep your account secure.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <FormInput
            id="current-password"
            label="Current Password"
            error={errors.currentPassword?.message}
            placeholder="Enter current password"
            showPasswordToggle
            {...register("currentPassword")}
          />

          <FormInput
            id="new-password"
            label="New Password"
            error={errors.newPassword?.message}
            placeholder="At least 8 characters"
            showPasswordToggle
            {...register("newPassword")}
          />

          <FormInput
            id="confirm-password"
            label="Confirm New Password"
            error={errors.confirmPassword?.message}
            placeholder="Repeat new password"
            showPasswordToggle
            {...register("confirmPassword")}
          />

          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              variant="secondary"
              disabled={!isDirty || isLoading}
            >
              <Lock className="h-4 w-4 mr-2" />
              {isLoading ? "Updating..." : "Update Password"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}