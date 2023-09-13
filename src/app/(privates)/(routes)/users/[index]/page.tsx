import { getAllUsers } from "@/services/user";

import { columns } from "@/app/(privates)/(routes)/servicebook/group/admin/components/columns";
import { DataTable } from "@/app/(privates)/(routes)/servicebook/group/admin/components/DataTable";

export default async function UserList() {
  const data = await getAllUsers();
  console.log(data)

  return (
    <DataTable columns={columns} data={data}/>
  );
}
