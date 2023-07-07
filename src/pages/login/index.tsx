
import { CardLogin } from '../../components/Cards/CardLogin';
import { useEffect, useState } from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import Head from "next/head"
import LoadingPage from '../../components/LoadingPage';
import { useRouter } from 'next/router';
// * tela de login '/login'
export function Login () {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false)
  const {auth, verifyCookies} = useAuth()
  

  useEffect(() => {
    setTimeout(() => {
      console.log("cookies");
      verifyCookies()
      setLoaded(true)
    }, 300);
  }, [])

  useEffect(() => {
    console.log("auth");
    if(loaded){
      if(auth){
        router.push("/Dashboard")
      }
    }
  }, [loaded, auth])

if(loaded && !auth){
    return (
      <>
      <Head>
          <title> Login - GLPI </title>
        </Head>
      <div className="flex items-center  flex-col w-screen h-screen mx-auto justify-center bg-gradient  gap-8 ">
        <div className="w-full lg:w-auto lg:mr-202 h-screen relative tv:right-118 lg:right-202 md:right-68 md:mr-68  sm:mr-0 sm:right-100 -left-57 -ml-22 lg:left-0 lg:ml-0 ">
          <img className=" fixed tv:-bottom-118 lg:-bottom-118 h-auto sm:-bottom-32 bottom-28" src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png" width="1300" height="500"/>
        </div>

          <div className="w-full h-full absolute flex ">
            <CardLogin />
          </div>
        </div>
      </>
    );
  }else{
    return(
      <LoadingPage/>
    );
  }
}

export default Login

