import { api } from "@/Utils/server/api";

import { SubGroupModel } from "@/types";

export async function getAllSubGroups(idCategory: string) {
  const { data } = await api.get<SubGroupModel[]>(
    `/servicebook/group/${idCategory}/subgroup`
  );

  return data?.map((subgroup) => ({
    ...subgroup,
    createdAt: new Date(subgroup.createdAt),
    updatedAt: new Date(subgroup.updatedAt),
  }));
}
type CreateSubGroup = Pick<SubGroupModel, "serviceGroupId" | "description">;

export async function createSubGroup({
  serviceGroupId,
  description,
}: CreateSubGroup): Promise<SubGroupModel> {
  return api.post("/servicebook/subgroup", {
    serviceGroupId,
    description,
  });
}

export async function deleteSubGroup(id: string): Promise<void> {
  return api.delete(`/servicebook/subgroup/${id}`);
}

type UpdateSubGroup = Pick<SubGroupModel, "id" | "description">;

export async function updateSubGroup({
  id,
  description,
}: UpdateSubGroup): Promise<void> {
  return api.put(`/servicebook/subgroup/${id}`, { description });
}
