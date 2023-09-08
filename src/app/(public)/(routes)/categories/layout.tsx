import { ReactNode } from "react";

import Link from "next/link";

export default function CategoriesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <header className="bg-gradient sticky top-0 z-10 h-16">
        <div className="container flex h-full items-center justify-between">
          <span className="text-xl font-bold text-white-100">
            Carta de serviços
          </span>

          <Link
            href="/login"
            className="rounded-md bg-red-ufal px-4 py-2 text-sm font-semibold text-white-100 transition-colors hover:bg-red-ufal/90"
          >
            Acessar o sistema
          </Link>
        </div>
      </header>
      <main className="container h-full p-8">{children}</main>
    </>
  );
}
