// pages/404.js
import Image from 'next/image';
import Link from 'next/link';
import ufalLogo from "/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
const NotFoundPage = () => {
  return (
    <>
      <div className="flex items-center  flex-col w-screen h-screen mx-auto justify-center bg-gradient  gap-8">
        <div className="w-full h-screen relative right-128">
          <img className=" fixed -bottom-118 h-auto" src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png" width="1300" height="500"/>
        </div>
        <div className="absolute bg-white-100 rounded-lg shadow-card text-gray-text p-8 flex flex-col items-center gap-8">
        <div className= "items-center flex flex-col text-3xl z-20">
          <h1>404 - Página não encontrada</h1>
          <h1>Parece que a página solicitada não existe</h1>
          </div>

        <div className="text-blue-ufal flex flex-row gap-20 text-lg z-20">
          <Link className="hover:text-blue-ufal-hover" href='/'>Página inicial

          </Link>
          <Link className="hover:text-blue-ufal-hover" href='/login'>
            Login
          </Link>
          <Link className="hover:text-blue-ufal-hover" href='/signup'>
            Cadastro
          </Link>
          </div>
      </div>
        </div>
        
    </>
  );
};

export default NotFoundPage;