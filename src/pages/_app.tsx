import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps as AppPropsNext } from "next/app";
import { ToastContainer } from "react-toastify";

interface AppProps extends AppPropsNext {
  session: Session;
}

export default function App({ Component, session, pageProps }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ChakraProvider>
    </SessionProvider>
  );
}
