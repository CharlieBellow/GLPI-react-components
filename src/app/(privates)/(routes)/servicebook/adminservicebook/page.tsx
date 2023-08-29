import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { getAllGroups } from "@/Utils/server/getInfo";

import AdminServiceBookTypeList from "./AdminServicebookTypeList";

interface AdminProps {
  list: any[];
  title: string;
}

export default function AdminServiceBook(props: AdminProps) {
  // TODO fazer a requisição de todos os grupos, subgrupos e serviços
  const [list, setList] = useState<[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      const groups = await getAllGroups();
      setList(groups);
    };
    fetchData();
    console.log(list);
  }, [router.isReady, list]);

  return <AdminServiceBookTypeList list={list} title={"Grupos"} />;
}
