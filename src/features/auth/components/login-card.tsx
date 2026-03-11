import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import PathConstants from "@/routes/path-constants"
import { Link, useNavigate } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { FormInput, TestPlatformLogo } from "@/components/common"
import { Loader2Icon } from "lucide-react"
import { LoginSchema, type LoginFormData } from "../schemas"

const inputClassName =
  "h-11 rounded-xl bg-background/60 transition-all duration-200 focus:bg-background dark:bg-muted/30 dark:focus:bg-muted/50"

export function LoginCard() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigate({ to: PathConstants.INDEX })
    }, 2000)
  }

  return (
    <div className="rounded-2xl border border-border/50 bg-card/70 p-8 shadow-lg backdrop-blur-xl dark:bg-card/50 dark:shadow-2xl">
      <div className="mb-8 flex flex-col items-center gap-3">
        <TestPlatformLogo />
        <p className="text-sm text-muted-foreground">
          Sign in to your account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <FormInput
          id="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
          disabled={isLoading}
          autoComplete="email"
          inputClassName={inputClassName}
          {...register("email")}
          error={errors.email?.message}
        />

        <FormInput
          id="password"
          label="Password"
          placeholder="Enter your password"
          required
          showPasswordToggle
          disabled={isLoading}
          autoComplete="current-password"
          inputClassName={inputClassName}
          {...register("password")}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="h-11 w-full rounded-xl bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] disabled:hover:scale-100"
        >
          {isLoading ? (
            <>
              <Loader2Icon className="h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {"Don't have an account? "}
        <Link
          to={PathConstants.REGISTER}
          className="font-semibold text-secondary hover:text-secondary/80 transition-colors"
        >
          Create one
        </Link>
      </p>
    </div>
  )
}