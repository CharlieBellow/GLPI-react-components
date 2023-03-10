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
export let category: Group
 export async function getCategory(id : string) {
  const getCategory = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/group/${id}`,
              })
              .then(
             response => {
              category = response.data
            }
              )

    }


export async function getAllCategories() {
  const response= await axios({
                  method: 'get',
                  baseURL: baseURL,
                  url: "/servicebook/group",
                  });
              
  return response.data;                
}

    export let listSubcategories: Array<SubGroup>
export async function getAllSubcategories ( idCategory: string ) {
  const getAllSubcategories = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/group/${idCategory}/subgroup`,

  } ) 
    .then( response => {
      listSubcategories = response.data;

    } )
    }

    export let subCategory: SubGroup
    export async function getSubcategory(id : string) {
      const getSubcategory = await axios({
        method: 'get',
        baseURL: baseURL,
        url: `/servicebook/subgroup/${id}`,
      })
      .then(
             response => {
              subCategory = response.data
            }
              )
      
      
    }
    
    export let listServices = []
     export async function getAllServices(idSubgroup) {
       const getAllServices = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/subgroup/${idSubgroup}/service`,
              }) 
    .then( response => {
      listServices = response.data;

    } )
    }

    export let service: Service
    export async function getService(id : string) {
  const getService = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/service/${id}`,
              })
              .then(
             response => {
              service = response.data
            }
              )

    }


export let user = [];
export async function getUser ( id : string) {
  const getUser = await axios( {
    method: 'get',
    baseURL: baseURL,
    url: `/servicebook/service/${ id }`,
  } )
    .then(
      response => {
        service = response.data;
      }
    );

}