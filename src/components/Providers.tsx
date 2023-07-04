"use client";

import { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";

import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

import { MenuProvider } from "@/Contexts/MenuContext";
import { MessageProvider } from "@/Contexts/MessageContext";
import { PreviousPageProvider } from "@/Contexts/PreviousPageContext";
import { UserProvider } from "@/Contexts/UserContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MessageProvider>
      <SessionProvider>
        <UserProvider>
          <MenuProvider>
            <ChakraProvider>
              <PreviousPageProvider>
                {children}
                <ToastContainer />
              </PreviousPageProvider>
            </ChakraProvider>
          </MenuProvider>
        </UserProvider>
      </SessionProvider>
    </MessageProvider>
  );
}
