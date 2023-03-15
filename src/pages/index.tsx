
import { useContext } from 'react';
import { useAuth }  from '../Contexts/AuthContext';
import { useRouter } from "next/router";
import { Page } from "../components/Page";
import HomeScreen from "../components/HomeScreen";
import {useEffect} from "react"



export default function Home () {
  const router = useRouter();
  const { auth } = useAuth();

   useEffect( () => {

    if ( !auth ) {
      router.push( "/login" );
    } else {
      router.push( "/Dashboard" );
    }

    

   }, [] )


  return (
    
    <>
    </>
    
      
   
  );
}
