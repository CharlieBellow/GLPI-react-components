import React from "react";

import CardMenu from "../Cards/CardMenu";
import Sidebar from "../Sidebar/Sidebar";

interface PageProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Layout({ children, ...rest }: PageProps) {
  return (
    <main className="flex h-screen max-h-screen overflow-y-hidden transition-all">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-slate-200">
        <CardMenu />
        <div
          {...rest}
          className="h-full max-h-[calc(100vh-10rem)] overflow-y-auto bg-gray-medium"
        >
          {children}
        </div>
      </div>
    </main>
  );
}
