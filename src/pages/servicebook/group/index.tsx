import { Page } from "../../../components/Page";
import GroupList from "../../../components/GroupList";
import { ServiceContext } from "../../../Contexts/ServiceContext";
import Head from "next/head";



export default function CategoryHome () {
  return (
  <>
  <Head>
    <title>{"Grupos"}</title>
  </Head>
    <GroupList />
  </>
  )
}