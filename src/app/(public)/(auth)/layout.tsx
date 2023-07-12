import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <main className="grid h-full place-content-center">{children}</main>;
}
