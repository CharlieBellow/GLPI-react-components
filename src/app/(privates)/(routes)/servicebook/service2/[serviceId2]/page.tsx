import CardServiceDescription from "@/components/Cards/CardServiceDescription";

import { getService } from "@/Utils/server/getInfo";

export default async function ServiceLetter({
  params: { serviceId2 },
}: {
  params: { serviceId2: string };
}) {
  const service = await getService(serviceId2);

  return (
    <CardServiceDescription
      id={service.id}
      description={service.description}
      title={service.title}
      definition={service.definition}
      serviceSubGroupId={service.serviceSubGroupId}
      personType={service.personType}
      waitingTime={service.waitingTime}
      deadline={service.deadline}
      openningHours={service.openningHours}
      isPrioritaryService={service.isPatromonyIdRequired}
      serviceLocation={service.serviceLocation}
      requiredDocuments={service.requiredDocuments}
      contactInfo={service.contactInfo}
      isPatromonyIdRequired={service.isPatromonyIdRequired}
      glpiSla={service.glpiSla}
      createdAt={service.createdAt}
      updatedAt={service.updatedAt}
    />
  );
}
