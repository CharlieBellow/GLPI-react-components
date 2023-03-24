import axios from "axios";

const baseURL = "http://172.27.12.171:3333"
// TODO manage errors
export function postGroup ( values: object, token: string ) {
  axios( {
    method: 'post',
    baseURL: baseURL,
    url: `/servicebook/group/`,

    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}

export function postSubGroup ( values: object, token: string ) {
  axios( {
    method: 'post',
    baseURL: baseURL,
    url: `/servicebook/subgroup/`,
    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}


export function postService ( values: object, token: string ) {
  axios( {
    method: 'post',
    baseURL: baseURL,
    url: `/servicebook/service/`,
    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}

export function postServiceOrder ( values: object, token: string ) {
  axios( {
    method: 'post',
    baseURL: baseURL,
    url: `/servicebook/serviceorder/`,
    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}


export function postUser ( values: object, token: string ) {
  axios( {
    method: 'post',
    baseURL: baseURL,
    url: `/users`,
    data: values,
    headers: { authorization: `Bearer ${ token }` }
  } );

}
