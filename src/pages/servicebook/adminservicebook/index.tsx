import Head  from 'next/head';
import React, { useEffect, useState } from 'react'
import AdminServiceBookTypeList from './AdminServicebookTypeList';
import { getAllGroups } from '../../../Utils/server/getInfo';
import { useRouter } from 'next/router';

interface AdminProps {
  list: any[];
  title: string;
}

export default function AdminServiceBook(props: AdminProps) {
//  fazer a requisição de todos os grupos, subgrupos e serviços
  const [list, setList] = useState<[]>([])
  const router = useRouter()

  useEffect(() => {
   
    if (!router.isReady) return;
    const fetchData = async () => {

      const groups = await getAllGroups()
      setList(groups)
    }
    fetchData()
    console.log(list)
  }, [router.isReady, list])
  
  
  return (
    <>
      <Head>
        <title>Administrar servicebook</title>
      </Head>
      <AdminServiceBookTypeList list={list} title={"Grupos"} />
    </>
  )
}
