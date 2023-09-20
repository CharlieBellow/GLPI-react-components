import { getService } from "@/Utils/server/getInfo";

import CardCreateServiceOrder from "@/app/(privates)/(routes)/servicebook/serviceorder/[serviceOrderId]/createserviceorder/components/CardCreateServiceOrder";

export default async function CreateServiceOrder({
  params,
}: {
  params: { serviceOrderId: string };
}) {
  const serviceInfo = await getService(params.serviceOrderId);

  console.log(serviceInfo);

  return <CardCreateServiceOrder service={serviceInfo} />;
}
