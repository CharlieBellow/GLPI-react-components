import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-gradient flex h-screen items-center justify-center overflow-hidden p-6 md:p-0">
      {children}
      <div className="absolute left-0 top-1/2 flex h-screen w-full -translate-y-1/2 items-center justify-start overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="block scale-[250%] pr-20 pt-20 sm:scale-[200%] sm:pt-20 md:scale-125 md:pr-36 md:pt-32 lg:scale-100 lg:pr-56 lg:pt-36 tv:scale-90 tv:pr-72 tv:pt-40"
          src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
          alt="brasão da UFAL com fundo transparente"
        />
      </div>
    </main>
  );
}
