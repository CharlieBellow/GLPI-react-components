
import { useContext } from 'react';
import { useAuth }  from '../Contexts/AuthContext';

import { useRouter } from "next/router";
import {useEffect} from "react"
 

export default function Home () {

const router = useRouter();

  const { auth } = useAuth();


  console.log( "auth App", auth );

  useEffect( () => {
    if ( auth ) {
      router.push( "privateroutes/dashboard", "/" );
    } else {
      router.push( "publicroutes/Login", "login" );
    }
  }, [  ] )


  return (
    <>

    

    </>
  );
}
