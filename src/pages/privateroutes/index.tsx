import React from "react";
import axios from "axios";
import { Page } from "../../components/Page";
import HomeScreen from "../../components/HomeScreen";
import { useAuth } from "../../Contexts/AuthContext"
export default function Dashboard () {


const {changeToken} = useAuth()

  async function getToken ( values : object) {
    const token = await axios.post( "http://172.27.12.171:3333/sessions", values )
      .then( response => {
        changeToken( response.data.token );

        console.log( response.data.token );
        localStorage.setItem( "token", response.data.token );
      } );
  }

  getToken( { email: "ud@arapiraca.ufal.br", password: "admin" } )

  
  return (
    <Page
      pagetitle={ "Dashboard" }
      contentpage={ <HomeScreen /> }
    />
  );
}


