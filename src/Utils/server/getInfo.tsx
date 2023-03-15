import axios from "axios";
import { Group, Service, SubGroup } from "./types";
const baseURL = "http://172.27.12.171:3333"

export interface categoryProps {
  id: string,
  description: string,
  createdAt: Date;
  updatedAt: Date;
}
// criar erros
 export async function getGroup(id : string) {
  const response = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/group/${id}`,
              });
    return response.data;
    }


export async function getAllGroups() {
  const response= await axios({
                  method: 'get',
                  baseURL: baseURL,
                  url: "/servicebook/group",
                  });
              
  return response.data;                
}

export async function getAllSubGroups ( idCategory: string ) {
  const response = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/group/${idCategory}/subgroup`,
                });
  return response.data;
}

export async function getSubGroup(id : string) {
      const response = await axios({
        method: 'get',
        baseURL: baseURL,
        url: `/servicebook/subgroup/${id}`,
      });
  return response.data;
}
export async function getAllServices(idSubgroup : string) {
       const response = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/subgroup/${idSubgroup}/service`,
              });
  return response.data;
}

export async function getService(id : string) {
  const response = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/service/${id}`,
              });
  return response.data;
    }


export async function getUser ( id : string) {
  const response = await axios( {
    method: 'get',
    baseURL: baseURL,
    url: `/core/Person/${ id }`,
  } );

  return response.data;
}