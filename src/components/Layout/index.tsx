import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import { SidebarProvider } from "../Sidebar/SidebarContext";
import CardMenu from "../Cards/CardMenu";

interface PageProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

// * layout padrão das páginas
export function Layout({ children, ...rest }: PageProps) {
  return (
    <SidebarProvider>
      <Sidebar>
        <>
          <div className="flex flex-col bg-slate-200">
            <CardMenu pagetitle="Dashboard" />
            <div {...rest} className="content z-30 bg-gray-medium">
              {children}
            </div>
          </div>
        </>
      </Sidebar>
    </SidebarProvider>
  );
}
