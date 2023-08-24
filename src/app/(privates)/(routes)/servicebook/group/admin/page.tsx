import { getAllGroups } from "@/Utils/server/getInfo";

import { columns } from "./components/Columns";
import { DataTable } from "./components/DataTable";

export default async function AdminServiceBook() {
  const groups = await getAllGroups();

  return <DataTable columns={columns} data={groups} />;
}
