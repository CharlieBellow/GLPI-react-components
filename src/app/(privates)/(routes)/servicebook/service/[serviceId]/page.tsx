import { getService } from "@/Utils/server/getInfo";

import ServiceDescription from "@/app/(privates)/(routes)/servicebook/service/[serviceId]/components/ServiceDescription";

export default async function ServiceLetter({
  params: { serviceId },
}: {
  params: { serviceId: string };
}) {
  const service = await getService(serviceId);

  return (
    <ServiceDescription
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
