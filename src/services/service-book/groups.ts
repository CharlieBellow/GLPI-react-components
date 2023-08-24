import { api } from "@/Utils/server/api";

import { Group } from "@/types";

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
