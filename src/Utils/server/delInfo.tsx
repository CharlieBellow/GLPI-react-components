import axios from "axios";

const baseURL = "http://172.27.12.171:3333";

export async function delCategory ( id, token ) {
  const delCategory = await axios( {
    method: 'del',
    baseURL: baseURL,
    url: `/servicebook/group/${id}`,

    headers: { authorization: `Bearer ${ token }` }
  } );

}

export async function delSubcategory ( id, token ) {
  const delCategory = await axios( {
    method: 'del',
    baseURL: baseURL,
    url: `/servicebook/subgroup/${id}`,
    headers: { authorization: `Bearer ${ token }` }
  } );

}


export async function delService ( id, token ) {
  const delCategory = await axios( {
    method: 'del',
    baseURL: baseURL,
    url: `/servicebook/service/${id}`,
    headers: { authorization: `Bearer ${ token }` }
  } );

}
