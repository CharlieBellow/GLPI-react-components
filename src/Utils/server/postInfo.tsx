import { api } from "@/Utils/server/api";

type CreateGroup = {
  description: string;
};

export function postGroup(values: CreateGroup): Promise<void> {
  return api.post(`/servicebook/group`, values);
}

export async function postSubGroup(values: object): Promise<void> {
  return api.post(`/servicebook/subgroup`, values);
}

export async function postService(values: object): Promise<void> {
  return api.post("/servicebook/service", values);
}

export async function postServiceOrder(values: object): Promise<void> {
  return api.post("/servicebook/serviceorder", values);
}

export async function postUser(values: object): Promise<void> {
  return api.post("/users", values);
}
