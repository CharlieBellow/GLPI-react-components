// pages/404.js
import Image from 'next/image';
import Link from 'next/link';
import ufalLogo from "/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
const NotFoundPage = () => {
  return (
    <>
      <div className="flex items-center  flex-col w-screen h-screen mx-auto justify-center bg-gradient  gap-8">
        <div className="w-full lg:h-screen relative lg:right-128 right-52 h-full">
          <img className=" fixed lg:-bottom-118   h-auto" src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png" width="1300" height="500"/>
        </div>
        <div className="absolute bg-white-100 rounded-lg shadow-card text-gray-text p-8 flex flex-col items-center gap-8 lg:mx-0 mx-6">
        <div className= "items-center flex flex-col text-3xl z-20">
          <h1>404 - Página não encontrada</h1>
          <h1>Parece que a página solicitada não existe</h1>
          </div>

        <div className="text-blue-ufal flex lg:flex-row flex-col lg:gap-20 items-center text-lg z-20">
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