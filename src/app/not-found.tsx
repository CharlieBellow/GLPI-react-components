import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <div className="mx-auto flex  h-screen w-screen flex-col items-center justify-center gap-8  bg-gradient">
        <div className="relative right-52 h-full w-full lg:right-128 lg:h-screen">
          <Image
            className=" fixed h-auto   lg:-bottom-118"
            src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
            width="1300"
            height="500"
            alt="brasão da UFAL"
          />
        </div>
        <div className="absolute mx-6 flex flex-col items-center gap-8 rounded-lg bg-white-100 p-8 text-gray-text shadow-card lg:mx-0">
          <div className="z-20 flex flex-col items-center text-3xl">
            <h1>404 - Página não encontrada</h1>
            <h1>Parece que a página solicitada não existe</h1>
          </div>

          <div className="z-20 flex flex-col items-center text-lg text-blue-ufal lg:flex-row lg:gap-20">
            <Link className="hover:text-blue-ufal-hover" href="/">
              Página inicial
            </Link>
            <Link className="hover:text-blue-ufal-hover" href="/login">
              Login
            </Link>
            <Link className="hover:text-blue-ufal-hover" href="/signup">
              Cadastro
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
