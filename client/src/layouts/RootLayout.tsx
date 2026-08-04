import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Outlet />
    </div>
  );
}