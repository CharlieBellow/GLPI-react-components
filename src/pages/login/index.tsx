
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
      verifyCookies()
      setLoaded(true)
    }, 300);
  }, [])

  useEffect(() => {
    if(loaded){
      if(auth){
        router.push("/Dashboard")
      }
    }
  }, [loaded])

  if(loaded && !auth){
    return (
      <>
      <Head>
          <title> Login - GLPI </title>
        </Head>
        <div className="bg-gradient w-screen h-screen relative bg:fixed ">
          <div className="bg-ufalBackground w-auto opacity-30 h-[67rem] lg:bg-cover bg-[length:1159.36px] left-[-33rem] absolute top-[-17rem] right-0 bg-no-repeat lg:w-full lg:h-[200.625%] lg:left-[-33rem] lg:fixed lg:top-[-42.83%] lg:right-[21.39%]"></div>

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

