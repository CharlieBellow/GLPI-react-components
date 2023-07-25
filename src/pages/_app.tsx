import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps as AppPropsNext } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../Contexts/AuthContext";
import { UserProvider } from "../Contexts/UserContext";
import { MenuProvider } from "../Contexts/MenuContext";
import { ToastContainer } from "react-toastify";
import { MessageProvider } from "../Contexts/MessageContext";
import { PreviousPageProvider } from "../Contexts/PreviousPageContext";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface AppProps extends AppPropsNext {
  session: Session;
}

export default function App({ Component, session, pageProps }: AppProps) {
  return (
    <SessionProvider session={session}>
      <MessageProvider>
        <AuthProvider>
          <UserProvider>
            <MenuProvider>
              <ChakraProvider>
                <PreviousPageProvider>
                  <Component {...pageProps} />
                  <ToastContainer />
                </PreviousPageProvider>
              </ChakraProvider>
            </MenuProvider>
          </UserProvider>
        </AuthProvider>
      </MessageProvider>
    </SessionProvider>
  );
}
