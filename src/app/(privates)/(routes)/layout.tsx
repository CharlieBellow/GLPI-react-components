import { ReactNode } from "react";

import CardMenu from "@/components/Cards/CardMenu";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen max-h-screen overflow-y-hidden transition-all">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-slate-200">
        <CardMenu />
        <div className="h-full max-h-[calc(100vh-10rem)] overflow-y-auto bg-gray-medium">
          <div className="container py-8">{children}</div>
        </div>
      </div>
    </main>
  );
}
