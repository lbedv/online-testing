import { z } from "zod"

/**
 * Validation schema for user profile update form.
 * Validates display name and email address.
 */
export const ProfileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email("Invalid email address"),
})

export type ProfileFormData = z.infer<typeof ProfileSchema>

/**
 * Validation schema for changing user password.
 * Requires current password and confirms new password matches confirmation.
 */
export const PasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type PasswordFormData = z.infer<typeof PasswordSchema>
