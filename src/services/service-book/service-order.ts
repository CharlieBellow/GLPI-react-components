import { api } from "@/Utils/server/api";

type UpdateServiceOrder = {
  id: string;
  description: string;
};

export async function updateServiceOrder({
  id,
  description,
}: UpdateServiceOrder) {
  return api.put(`/servicebook/serviceorder/${id}`, { description });
}

type GetCoordinatorsResponse = {
  id: string;
  name: string;
  cpf: string;
  email: string;
};

export async function getCoordinators(): Promise<GetCoordinatorsResponse[]> {
  const { data } = await api.get("/servicebook/serviceorder/coordinators");
  return data;
}
