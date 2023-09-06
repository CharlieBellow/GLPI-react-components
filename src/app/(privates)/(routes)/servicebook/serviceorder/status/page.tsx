import ServicesOrder from "@/components/ServicesComponent/ServicesOrder";

import { getAuthSession } from "@/Utils/auth";
import { getRequesterService } from "@/Utils/server/getInfo";

// * ordens de serviço do usuário '/servicebook/serviceorder'
const myuser = {
  id: "972e1f58-95c6-4582-ac05-fb385dbb557b",
  status: "Ativo",
  cpf: "08551062476",
  name: "Charlie Bellow de Oliveira",
  birthDate: "2023-03-02T17:00:26.157Z",
  gender: "M",
  created_at: "2023-03-02T20:00:24.955Z",
};
export default async function MyServices() {
  // const responsible = await getResponsibleService(myuser.id);
  const session = await getAuthSession();

  if (!session) throw new Error("sem session");

  const data = await getRequesterService(myuser.id);

  return <ServicesOrder requester={data} title="Serviços por Status" />;
  //return <div>{requester?.length}</div>;
}
