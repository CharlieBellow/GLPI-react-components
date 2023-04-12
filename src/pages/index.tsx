import Head from "next/head";
import HomeScreen from "../components/HomeScreen";

// * página principal '/'
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
