import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ReactNode } from "react";

import { Metadata } from "next";
import { redirect } from "next/navigation";

import { Providers } from "@/components/Providers";

import { getAuthSession } from "@/Utils/auth";

export const metadata: Metadata = {
  title: {
    default: "GLPI - UFAL",
    template: "%s | GLPI - UFAL",
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getAuthSession();
  console.log(session);
  

  if (session?.user.error === "RefreshTokenError") {
    redirect("/login");
  }

  return (
    <html>
      <body className="bg-gray-medium">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
