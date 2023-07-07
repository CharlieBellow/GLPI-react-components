import HomeScreen from "../components/HomeScreen";
import Head from "next/head";
import { Layout } from "../components/Layout"

// * página principal '/dashboard'
export default function Dashboard () {
  
   return (
   <Layout> 
      <Head>
         <title>{"Dashboard"}</title>
      </Head>
      <HomeScreen /> 
   </Layout>
   )
}


