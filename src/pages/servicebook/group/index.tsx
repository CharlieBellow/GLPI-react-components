import GroupList from "../../../components/GroupList";
import Head from "next/head";

// * tela de grupos 'servicebook/group'

export default function GroupHome () {
  return (
  <>
  <Head>
    <title>{"Grupos"}</title>
  </Head>
    <GroupList />
  </>
  )
}