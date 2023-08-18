import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps as AppPropsNext } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { ToastContainer } from "react-toastify";

interface AppProps extends AppPropsNext {
  session: Session;
}

export default function App({ Component, session, pageProps }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <ToastContainer />
    </SessionProvider>
  );
}
