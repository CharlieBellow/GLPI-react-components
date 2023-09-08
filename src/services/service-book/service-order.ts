import { api } from "@/Utils/server/api";

type UpdateServiceOrder = {
  description: string;
  id: string
};

export async function updateServiceOrder({description, id}: UpdateServiceOrder) {
  return api.put(`/servicebook/serviceorder/${id}`, {description});
}
