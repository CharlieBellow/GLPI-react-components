import CardCreateServiceOrder from "@/components/Cards/CardCreateServiceOrder";

import { getService } from "@/Utils/server/getInfo";

export default async function CreateServiceOrder({
  params,
}: {
  params: { serviceOrderId: string };
}) {
  const serviceInfo = await getService(params.serviceOrderId);
  
  console.log(serviceInfo)

  return <CardCreateServiceOrder service={serviceInfo}/>;
}
