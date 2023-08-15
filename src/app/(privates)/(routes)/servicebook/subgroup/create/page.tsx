import { CardCreateSubGroup } from "@/components/Cards/CardCreateSubGroup";

import { getAllGroups } from "@/Utils/server/getInfo";

export default async function SubGroupPage() {
  const groups = await getAllGroups();
  const mappedGroups = groups.map((group) => ({
    id: group.id,
    label: group.description,
  }));

  return <CardCreateSubGroup groups={mappedGroups} />;
}
