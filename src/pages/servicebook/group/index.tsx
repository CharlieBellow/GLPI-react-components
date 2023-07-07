import GroupList from "../../../components/GroupList";
import Head from "next/head";
import { Layout } from "../../../components/Layout";

// * tela de grupos 'servicebook/group'

export default function GroupHome () {


  return (
  <Layout>
  <Head>
    <title>{"Grupos"}</title>
  </Head>
    <GroupList />
  </Layout>
  )
}