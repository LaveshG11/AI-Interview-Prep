import { Outlet } from "react-router";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-white">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}