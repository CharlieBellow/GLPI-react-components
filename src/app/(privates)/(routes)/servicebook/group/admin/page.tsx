import { getAllGroups } from "@/services/service-book/groups";

import { columns } from "./components/columns";
import { DataTable } from "./components/DataTable";

export default async function AdminServiceBook() {
  const groups = await getAllGroups();

  return <DataTable columns={columns} data={groups} />;
}
