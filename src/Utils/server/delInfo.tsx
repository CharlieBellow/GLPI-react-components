import axios from "axios";

const baseURL = "http://172.27.12.171:3333";

export async function delCategory ( id: string, token: string ) {
export async function delCategory ( id: string, token: string ) {
  const delCategory = await axios( {
    method: 'del',
    baseURL: baseURL,
    url: `/servicebook/group/${id}`,

    headers: { authorization: `Bearer ${ token }` }
  } );

}

export async function delSubcategory ( id: string, token: string ) {
export async function delSubcategory ( id: string, token: string ) {
  const delCategory = await axios( {
    method: 'del',
    baseURL: baseURL,
    url: `/servicebook/subgroup/${id}`,
    headers: { authorization: `Bearer ${ token }` }
  } );

}


export async function delService ( id: string, token: string ) {
  const delCategory = await axios( {
    method: 'del',
    baseURL: baseURL,
    url: `/servicebook/service/${id}`,
    headers: { authorization: `Bearer ${ token }` }
  } );

}
