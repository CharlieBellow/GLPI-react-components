import { getServiceOrder } from "@/Utils/server/getInfo";

import CardEditServiceOrder from "@/app/(privates)/(routes)/servicebook/serviceorder/[serviceOrderId]/edit/components/CardEditServiceOrder";

// * editar ordem de serviço 'serviceorder/[id:serviceorder]/edit'

export default async function EditServiceOrder({
  params: { serviceOrderId },
}: {
  params: { serviceOrderId: string };
}) {
  const data = await getServiceOrder(serviceOrderId);
  console.log("data", data);

  return (
    <CardEditServiceOrder
      serviceOrderInfo={data}
      serviceOrderId={serviceOrderId}
    />
  );
}
