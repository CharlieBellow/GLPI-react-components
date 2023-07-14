import { Metadata } from "next";
import Image from "next/image";

import { FormSignUp } from "./components/FormSignUp";

export const metadata: Metadata = {
  title: "Cadastro",
};

export default function SignUpPage() {
  return (
    <div className="mx-auto flex  h-screen w-screen flex-col items-center justify-center gap-8">
      <div className="relative right-128 h-screen w-full">
        <Image
          className=" fixed -bottom-118 h-auto"
          src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
          width="1300"
          height="500"
          alt="brasão da UFAL com fundo transparente"
        />
      </div>
      <div className="absolute flex h-full w-full">
        <FormSignUp />
      </div>
    </div>
  );
}
