import { getCoordinators } from "@/services/service-book/service-order";
import { getAllSubGroupsByGroupId } from "@/services/service-book/subgroups";

import { columns } from "./components/columns";
import { CreateSubGroupDialog } from "./components/CreateSubGroupDialog";
import { DataTable } from "./components/DataTable";

export default async function AdminSubGroupPage({
  params,
}: {
  params: { subGroupId: string };
}) {
  const [subGroups, coordinators] = await Promise.all([
    getAllSubGroupsByGroupId(params.subGroupId),
    getCoordinators(),
  ]);

  return (
    <div>
      <div className="flex w-full items-center justify-end py-4">
        <CreateSubGroupDialog coordinators={coordinators} />
      </div>
      <DataTable columns={columns} data={subGroups} />;
    </div>
  );
}
