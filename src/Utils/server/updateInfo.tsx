import axios from "axios";

const baseURL = "http://172.27.12.171:3333"

export function updateServiceOrder ( values: object, token: string, id: string ) {
    axios( {
      method: 'put',
      baseURL: baseURL,
      url: `/servicebook/serviceorder/${id}`,
      data: values,
      headers: { authorization: `Bearer ${ token }` }
    } );
  
  }