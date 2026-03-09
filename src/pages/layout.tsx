import { Outlet } from "@tanstack/react-router";

export const Layout = () => {
  return (
    <div className="main-layout">
      <header>Main App Navigation</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};