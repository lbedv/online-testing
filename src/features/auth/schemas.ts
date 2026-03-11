import { z } from "zod"

/**
 * Validation schema for login form.
 * Requires valid email and non-empty password.
 */
export const LoginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export type LoginFormData = z.infer<typeof LoginSchema>

/**
 * Validation schema for registration form.
 * Enforces password requirements and matching confirmation password.
 */
export const RegisterSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type RegisterFormData = z.infer<typeof RegisterSchema>
