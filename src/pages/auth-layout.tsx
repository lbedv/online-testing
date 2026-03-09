import { Outlet } from "@tanstack/react-router";

export const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <header>Auth Navigation</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};