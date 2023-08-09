import CardGroup from "@/components/CardGroup";
import Heading from "@/components/Heading";
import { Books } from "@/components/icons";

import { getAllSubGroups, getGroup } from "@/Utils/server/getInfo";

export default async function SubGroupPage({
  params,
}: {
  params: { subGroupId: string };
}) {
  const subGroups = await getAllSubGroups(params.subGroupId);
  const group = await getGroup(subGroups[0].serviceGroupId);

  return (
    <>
      <Heading title={`Sub Categorias: ${group.description}`} />
      <div className="mt-12 grid w-full grid-cols-[repeat(auto-fill,_minmax(150px,200px))] place-content-center gap-4">
        {subGroups.map((subgroup) => (
          <CardGroup
            key={subgroup.id}
            href={`/servicebook/subgroup/${group.id}/services/${subgroup.id}`}
            icon={Books}
            label={subgroup.description}
          />
        ))}
      </div>
    </>
  );
}
