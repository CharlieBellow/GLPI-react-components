// pages/404.js
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <div className="flex items-center flex-col w-screen h- mx-auto justify-center bg-gradient relative">
            <div className="bg-ufalBackground w-screen h-full absolute  bg-cover bg-no-repeat -left-118 -top-64">

            </div>
        <div className="pb-8 items-center flex flex-col -top-[300px] w-screen h-screen">
          {/* <div className="absolute w-screen  -top-100  flex right-40"> */}
            {/* <Image src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png" width={1500} height={1000} alt="imagem não encontrada" className="right-40 bg-cover -top-40"/> */}
          {/* </div> */}
          <h1>404 - Page Not Found</h1>
          <p>Sorry, there is nothing to see here</p>
        </div>
        <p>
          Use the search box or the links below to explore our amazing
          application
        </p>
        <input
          type='search'
          placeholder='Just a dummy search box...'
        />
        <div>
          <Link href='/'>
            Homepage
          </Link>
          <Link href='/latest'>
            Latest Products
          </Link>
          <Link href='/contact'>
            Contact US
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;