"use client";

import { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";

import { ToastContainer } from "react-toastify";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <ToastContainer />
    </SessionProvider>
  );
}
