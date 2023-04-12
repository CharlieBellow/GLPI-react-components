import React from "react";
import HomeScreen from "../components/HomeScreen";
import Head from "next/head";

// * página principal '/dashboard'

export default function Dashboard () {
  
    return (
      <>
         <Head>
            <title>{"Dashboard"}</title>
         </Head>
         <HomeScreen /> 
      </>
     ) 
  

}


