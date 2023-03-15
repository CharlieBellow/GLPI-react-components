import axios from "axios";
export const baseURL = "http://172.27.12.171:3333";

export interface categoryProps {
  id: string,
  description: string,
  createdAt: Date;
  updatedAt: Date;
}
// criar erros

export async function getCategory ( id: string ) {
  console.log( id );
  const response = await axios( {
    method: 'get',
    baseURL: baseURL,
    url: `/servicebook/group/${ id }`,
  } );

  return response.data;

}

export async function getAllCategories () {
  const response = await axios( {
    method: 'get',
    baseURL: baseURL,
    url: "/servicebook/group",
  } );

  return response.data;
}

export async function getAllSubcategories ( idCategory: string ) {
  console.log( idCategory );
  const response = await axios( {
    method: 'get',
    baseURL: baseURL,
    url: `/servicebook/group/${ idCategory }/subgroup`,
  } );

  return response.data;
}


export async function getSubcategory ( id: string ) {
  const response = await axios( {
    method: 'get',
    baseURL: baseURL,
    url: `/servicebook/subgroup/${ id }`,
  } );

  return response.data;
}


export async function getAllServices ( idSubgroup: string ) {
  const response = await axios( {
    method: 'get',
    baseURL: baseURL,
    url: `/servicebook/subgroup/${ idSubgroup }/service`,
  } );

  return response.data;
}


export async function getService ( id: string ) {
  const response = await axios( {
    method: 'get',
    baseURL: baseURL,
    url: `/servicebook/service/${ id }`,
  } );

  return response.data;
}



const myuser = {
	id: "972e1f58-95c6-4582-ac05-fb385dbb557b",
	status: "Ativo",
	cpf: "08551062476",
	name: "Charlie Bellow de Oliveira",
	birthDate: "2023-03-02T17:00:26.157Z",
	gender: "M",
	created_at: "2023-03-02T20:00:24.955Z",
}

export async function getUser ( token: string ) {
  const response = await axios( {
    method: 'get',
    baseURL: baseURL,
    url: `/users`,
    headers: { authorization: `Bearer ${ token }` }
  } );

  return response.data;
}