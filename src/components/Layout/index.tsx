import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import CardMenu from "../Cards/CardMenu";

interface PageProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

// * layout padrão das páginas
export function Layout({ children, ...rest }: PageProps) {
  return (
    <Sidebar>
      <div className="flex flex-col bg-slate-200">
        <CardMenu />
        <div {...rest} className="content z-30 bg-gray-medium">
          {children}
        </div>
      </div>
    </Sidebar>
  );
}
