"use client";

import { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";

import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ChakraProvider>
        {children}
        <ToastContainer />
      </ChakraProvider>
    </SessionProvider>
  );
}
