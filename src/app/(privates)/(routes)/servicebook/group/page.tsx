import CardGroup from "@/components/CardGroup";
import Heading from "@/components/Heading";
import { Books } from "@/components/icons";

import { getAllGroups } from "@/Utils/server/getInfo";

export default async function ServiceBookPage() {
  const groups = await getAllGroups();

  return (
    <>
      <Heading title="Categorias" />
      <div className="mt-12 grid w-full grid-cols-[repeat(auto-fill,_minmax(150px,200px))] place-content-center gap-4">
        {groups &&
          groups.map((group) => (
            <CardGroup
              key={group.id}
              href={`/servicebook/subgroup/${group.id}`}
              icon={Books}
              label={group.description}
            />
          ))}
      </div>
    </>
  );
}
