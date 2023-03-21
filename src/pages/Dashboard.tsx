import React, {useEffect, useState} from "react";
import axios from "axios";
import { Page } from "../components/Page";
import HomeScreen from "../components/HomeScreen";
import { useAuth } from "../Contexts/AuthContext"
import {useRouter} from "next/router"
import LoadingPage from "../components/LoadingPage";
import { usePreviousPage } from "../Contexts/PreviousPageContext";


export default function Dashboard () {


// const {changeToken} = useAuth()

  // async function getToken ( values : object) {
  //   const token = await axios.post( "http://172.27.12.171:3333/sessions", values )
  //     .then( response => {
  //       changeToken( response.data.token );

  //       console.log( response.data.token );
  //       localStorage.setItem( "token", response.data.token );
  //     } );
  // }

  // getToken( { email: "ud@arapiraca.ufal.br", password: "admin" } )

//   const router = useRouter();
//  const { auth } = useAuth();
 
//  useEffect( () => {
  //  if ( !auth ) {
  //     router.push( "/login", "/" );
  //   } else {
  //     router.push( "/" );
  //   }
  // } )
  

  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const { auth, user, verifyCookies, token } = useAuth()
  const {changePage} = usePreviousPage()
  console.log("token", token)
    useEffect(() => {
      if(loaded){
        if(!auth){
          //*salvar a página anterior pra quando o usuário fizer login, redirecionar para ela
          changePage("/Dashboard")
          router.push('/login')
        }
      }

    }, [loaded])
    
    useEffect(() => {
      setTimeout(() => {
        verifyCookies()
        setLoaded(true)
      }, 300);
    }, [])

  if(loaded && auth){
    return (
      <Page
         pagetitle={ "Dashboard" }
         contentpage={ <HomeScreen /> }
       />
       
     ) 
  }else{
    return (<LoadingPage/>)
  }

}


