import axios from "axios";

const baseURL = "http://172.27.12.171:3333"

export async function postCategory ( values, token ) {
  const postCategory = await axios( {
    method: 'post',
    baseURL: baseURL,
    url: `/servicebook/group/`,

    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}

export async function postSubcategory ( values, token ) {
  const postCategory = await axios( {
    method: 'post',
    baseURL: baseURL,
    url: `/servicebook/subgroup/`,
    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}


export async function postService ( values, token ) {
  const postCategory = await axios( {
    method: 'post',
    baseURL: baseURL,
    url: `/servicebook/service/`,
    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}
