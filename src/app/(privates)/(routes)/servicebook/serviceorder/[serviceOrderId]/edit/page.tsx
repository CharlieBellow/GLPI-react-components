import CardUpdateServiceOrder from "@/components/Cards/CardUpdateServiceOrder";

import { getServiceOrder } from "@/Utils/server/getInfo";

// * editar ordem de serviço 'serviceorder/[id:serviceorder]/edit'

export default async function EditServiceOrder({
  params: { serviceOrderId },
}: {
  params: { serviceOrderId: string };
}) {
  const data = await getServiceOrder(serviceOrderId);
  console.log("data", data);

  return (
    <CardUpdateServiceOrder
      serviceOrderInfo={data}
      serviceOrderId={serviceOrderId}
    />
  );
}
