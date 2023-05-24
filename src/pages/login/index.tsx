
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
      <div className="flex items-center  flex-col w-screen h-screen mx-auto justify-center bg-gradient  gap-8">
        <div className="w-full h-screen relative right-128">
          <img className=" fixed -bottom-118 h-auto" src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png" width="1300" height="500"/>
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

