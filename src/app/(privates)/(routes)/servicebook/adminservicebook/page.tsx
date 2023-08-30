import { getAllGroups } from "@/Utils/server/getInfo";

import AdminServiceBookTypeList from "./AdminServicebookTypeList";

interface AdminProps {
  list: any[];
  title: string;
}

export default async function AdminServiceBook(props: AdminProps) {
  const groups = await getAllGroups();

  return <AdminServiceBookTypeList list={groups} title={"Grupos"} />;
}
