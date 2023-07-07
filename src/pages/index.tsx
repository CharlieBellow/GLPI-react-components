import Head from "next/head";
import HomeScreen from "../components/HomeScreen";
import { Layout } from "../components/Layout";


// * página principal '/'
export default function Home() {


  return (
    <Layout>
      <Head>
        <title>{"Dashboard"}</title>
      </Head>
      <HomeScreen /> 
    </Layout>
  )
}
