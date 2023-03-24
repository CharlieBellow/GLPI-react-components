import Head from "next/head";
import GroupList  from "../../components/GroupList";
import { Page } from "../../components/Page";

export default function Servicebook () {
  return <>
   <Head>
    <title>{"Grupos"}</title>
   </Head>
    <GroupList />
  </>
}