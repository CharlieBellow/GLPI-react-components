import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Metadata } from "next";
import { ReactNode } from "react";

import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: {
    default: "GLPI - UFAL",
    template: "%s | GLPI - UFAL",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
