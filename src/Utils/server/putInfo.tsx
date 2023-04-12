import axios from "axios";
// * funções de update no servidor 
const baseURL = "http://172.27.12.171:3333"
// TODO: falta gerenciar erros nas requisições
export function putGroup ( values: object, token: string ) {
  axios( {
    method: 'put',
    baseURL: baseURL,
    url: `/servicebook/group/`,

    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}

export function putSubGroup ( values: object, token: string ) {
  axios( {
    method: 'put',
    baseURL: baseURL,
    url: `/servicebook/subgroup/`,
    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}


export function putService ( values: object, token: string ) {
  axios( {
    method: 'put',
    baseURL: baseURL,
    url: `/servicebook/service/`,
    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}

export function putServiceOrder ( values: object, token: string ) {
  axios( {
    method: 'put',
    baseURL: baseURL,
    url: `/servicebook/serviceorder/`,
    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}


export function putUser ( values: object, token: string ) {
  axios( {
    method: 'put',
    baseURL: baseURL,
    url: `/users`,
    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}

// ver como faz no exios para mandar arquivos
export function patchAvatar ( values: object, token: string ) {
  axios( {
    method: 'post',
    baseURL: baseURL,
    url: `/users/avatar`,
    data: values,
    headers: { authorization: `Bearer ${ token }`, "Content-Type": "multipart/form-data" }
  } );

}


export async function patchAvatar2(values: string, token: string) {
  const formData = new FormData();
  formData.append(values, blob); // ! blob?
  const res = await axios.post("http://172.27.12.171:3333/users/avatar", formData, {
    headers: { authorization: `Bearer ${ token }`, 'Content-Type': 'multipart/form-data' }
                
              })
  
  } ;


