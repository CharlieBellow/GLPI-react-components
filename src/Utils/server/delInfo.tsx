import axios from "axios";

const baseURL = "http://172.27.12.171:3333";
// TODO manage errors
export async function deleteGroup ( id: string, token: string ) {
  const deleteGroup = await axios( {
    method: 'del',
    baseURL: baseURL,
    url: `/servicebook/group/${id}`,

    headers: { authorization: `Bearer ${ token }` }
  } );

}



  export async function deleteSubGroup ( id: string, token: string ) {
    const deleteSubGroup = await axios( {
      method: 'del',
      baseURL: baseURL,
      url: `/servicebook/subgroup/${id}`,
      headers: { authorization: `Bearer ${ token }` }
    } );
  
  }


export async function deleteService( id: string, token: string) {
  const deleteService = await axios( {
    method: 'del',
    baseURL: baseURL,
    url: `/servicebook/service/${id}`,
    headers: { authorization: `Bearer ${ token }` }
  } );

}

export async function deleteServiceOrder( id: string, token: string) {
  const deleteService = await axios( {
    method: 'del',
    baseURL: baseURL,
    url: `/servicebook/serviceorder/${id}`,
    headers: { authorization: `Bearer ${ token }` }
  } );

}
