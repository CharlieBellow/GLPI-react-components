import { api } from "./api";

export interface groupProps {
  id: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function getGroup(id: string) {
  const response = await api.get(`/servicebook/group/${id}`);
  return response.data;
}

type GetAllGroupsResponse = {
  id: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export async function getAllGroups() {
  const response = await api.get<GetAllGroupsResponse[]>(
    "/servicebook/group/all"
  );
  return response.data;
}

export async function getAllSubGroups(idCategory: string) {
  const response = await api.get(`/servicebook/group/${idCategory}/subgroup`);
  return response.data;
}

export async function getSubGroup(id: string) {
  const response = await api.get(`/servicebook/subgroup/${id}`);
  return response.data;
}

export async function getAllServices(idSubgroup: string) {
  const response = await api.get(`/servicebook/subgroup/${idSubgroup}/service`);
  return response.data;
}

export async function getService(id: string) {
  const response = await api.get(`/servicebook/service/${id}`);
  return response.data;
}

export async function getRequesterService(id: string, token: string) {
  const response = await api({
    method: "get",
    url: `servicebook/serviceorder/requester/${id}`,
    headers: { authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function getResponsibleService(id: string, token: string) {
  const response = await api({
    method: "get",
    url: `/servicebook/serviceorder/responsible/${id}`,
    headers: { authorization: `Bearer ${token}` },
  });
  return response.data;
}
export async function getServiceOrder(id: string, token: string) {
  const response = await api({
    method: "get",
    url: `/servicebook/serviceorder/${id}`,
    headers: { authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function getUser(token: string) {
  const response = await api({
    method: "get",
    url: `/users/`,
    headers: { authorization: `Bearer ${token}` },
  });

  return response.data;
}
export async function getUserId(id: string, token: string) {
  const response = await api({
    method: "get",
    url: `/users/${id}`,
    headers: { authorization: `Bearer ${token}` },
  });

  return response.data;
}

export async function getUserByEmail(email: object, token: string) {
  const response = await api({
    method: "get",
    url: `/users/find`,
    data: email,
    headers: { authorization: `Bearer ${token}` },
  });

  return response.data;
}

export async function getAllUsers(token: string) {
  const response = await api({
    method: "get",
    url: `/users`,
    headers: { authorization: `Bearer ${token}` },
  });

  return response.data;
}
