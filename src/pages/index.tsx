
import { useContext } from 'react';
import { useAuth }  from '../Contexts/AuthContext';
import { useRouter } from "next/router";
import { Page } from "../components/Page";
import HomeScreen from "../components/HomeScreen";
import {useEffect} from "react"



export default function Home () {
  const router = useRouter();
  const { auth, user, verifyCookies } = useAuth();
  
   useEffect( () => {
    if(verifyCookies()){
      //erro pq so atualiza na proxima chamada
      if(user && user.isAdmin)
        router.push( "/Dashboard" );
    }else{
      router.push( "/login" );
    }
   }, [] )


  return (
    
    <>
    </>
    
      
   
  );
}
