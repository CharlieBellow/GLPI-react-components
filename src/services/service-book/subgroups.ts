import { api } from "@/Utils/server/api";

import { SubGroupModel } from "@/types";

export async function getAllSubGroupsByGroupId(groupId: string) {
  const { data } = await api.get<SubGroupModel[]>(
    `/servicebook/group/${groupId}/subgroup`
  );

  return data?.map((subgroup) => ({
    ...subgroup,
    createdAt: new Date(subgroup.createdAt),
    updatedAt: new Date(subgroup.updatedAt),
  }));
}
type CreateSubGroup = {
  serviceGroupId: string;
  description: string;
  personId: string;
};

export async function createSubGroup(
  input: CreateSubGroup
): Promise<SubGroupModel> {
  return api.post("/servicebook/subgroup", input);
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
