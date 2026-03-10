import { Outlet } from "@tanstack/react-router"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { AuthBackground } from "@/features/auth"

export function AuthLayout() {
  return (
    <div className="relative min-h-screen">
      <AuthBackground>
        <Outlet />
      </AuthBackground>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  )
}
