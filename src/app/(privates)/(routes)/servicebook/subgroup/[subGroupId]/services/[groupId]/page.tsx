import Link from "next/link";

import Heading from "@/components/Heading";

import { getAllServices } from "@/Utils/server/getInfo";

export default async function ServiceSubGroupPage({
  params,
}: {
  params: { groupId: string };
}) {
  const servicesSubGroup = await getAllServices(params.groupId);

  return (
    <>
      <Heading title="Serviços" />
      <div className="mt-12 grid grid-flow-row gap-4">
        {servicesSubGroup.map((service) => (
          <Link
            id={service.title}
            href={`/servicebook/service2/${service.id}`}
            key={service.id}
            className="cursor-pointer rounded-lg bg-white-ice p-4 text-lg font-bold text-blue-ufal hover:bg-white-100 hover:underline hover:underline-offset-2"
          >
            {service.title}
          </Link>
        ))}
      </div>
    </>
  );
}
