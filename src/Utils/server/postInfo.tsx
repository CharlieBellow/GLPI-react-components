import axios from "axios";

import { api } from "@/Utils/server/api";
// * funções de adicionar no servidor

const baseURL = "http://172.27.12.171:3333";
// TODO: falta gerenciar erros nas requisições
export function postGroup(values: object, token: string) {
  axios({
    method: "post",
    baseURL: baseURL,
    url: `/servicebook/group/`,

    data: values,
    headers: { authorization: `Bearer ${token}` },
  });
}

export async function postSubGroup(values: object): Promise<void> {
  return api.post(`/servicebook/subgroup`, values);
}

export function postService(values: object, token: string) {
  axios({
    method: "post",
    baseURL: baseURL,
    url: `/servicebook/service/`,
    data: values,
    headers: { authorization: `Bearer ${token}` },
  });
}

export function postServiceOrder(values: object, token: string) {
  axios({
    method: "post",
    baseURL: baseURL,
    url: `/servicebook/serviceorder/`,
    data: values,
    headers: { authorization: `Bearer ${token}` },
  });
}

export function postUser(values: object, token: string) {
  axios({
    method: "post",
    baseURL: baseURL,
    url: `/users`,
    data: values,
    headers: { authorization: `Bearer ${token}` },
  });
}
