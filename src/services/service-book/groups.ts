import { api } from "@/Utils/server/api";

import { Group } from "@/types";

export async function getGroup(id: string) {
  const response = await api.get<Group>(`/servicebook/group/${id}`);
  return response.data;
}

type GetAllGroupsResponse = Group[];

export async function getAllGroups() {
  const { data } = await api.get<GetAllGroupsResponse>(
    "/servicebook/group/all"
  );

  return data?.map((group) => ({
    ...group,
    createdAt: new Date(group.createdAt),
    updatedAt: new Date(group.updatedAt),
  }));
}

type UpdateGroupInput = Pick<Group, "id" | "description">;

export async function updateGroup({
  id,
  description,
}: UpdateGroupInput): Promise<void> {
  return api.put(`/servicebook/group/${id}`, { description });
}

export async function deleteGroup(id: string): Promise<void> {
  return api.delete(`/servicebook/group/${id}`);
}

type CreateGroupInput = {
  description: string;
};

export async function createGroup(input: CreateGroupInput): Promise<void> {
  return api.post("/servicebook/group", input);
}
