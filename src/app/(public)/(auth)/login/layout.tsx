import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Login",
};

// TODO: check if user is logged in and redirect to dashboard if true
export default function LoginLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
