import Head from "next/head";
import LoadingPage from "../components/LoadingPage";
import HomeScreen from "../components/HomeScreen";


export default function Home() {
 
  return (
    <>
       <Head>
          <title>{"Dashboard"}</title>
       </Head>
       <HomeScreen /> 
    </>
  )
}
