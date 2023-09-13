import { api } from "@/Utils/server/api";

export async function getAllUsers() {
  const response = await api.get("/users");

  return response.data;
}

export async function getUserId(id: string) {
  const response = await api.get(`/users/${id}`);

  return response.data;
}

export async function postUser(values: object): Promise<void> {
  return api.post("/users", values);
}