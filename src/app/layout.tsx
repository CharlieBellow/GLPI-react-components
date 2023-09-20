import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ReactNode } from "react";

import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { redirect } from "next/navigation";

import { Providers } from "@/components/Providers";

import { getAuthSession } from "@/Utils/auth";

export const metadata: Metadata = {
  title: {
    default: "GLPI - UFAL",
    template: "%s | GLPI - UFAL",
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--roboto-sans",
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getAuthSession();

  if (session?.error === "RefreshTokenError") {
    redirect("/login");
  }

  return (
    <html lang="pt-BR" className={roboto.variable}>
      <body className="bg-gray-medium">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
