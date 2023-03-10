import axios from "axios";

const baseURL = "http://172.27.12.171:3333"

export interface categoryProps {
  id: string,
  description: string,
  createdAt: Date;
  updatedAt: Date;
}
// criar erros
export let category: categoryProps
 export async function getCategory(id: string) {
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


export let listCategories: Array<categoryProps>
 export async function getAllCategories() {
  const getAllCategories = await axios({
                method: 'get',
                baseURL: baseURL,
                url: "/servicebook/group",
              })
              .then(response => {
                listCategories = response.data
                
              })

    }

    export let listSubcategories = []
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

    export let subCategory = []
    export async function getSubcategory(id: string) {
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

export interface serviceProps {


  id: string,
  description: string,
  title: string,
  definition: string,
  serviceSubGroupId: string,
  personType: object[],
  waitingTime: null | Date,
  deadline: null | Date,
  openningHours: null | Date,
  isPrioritaryService: boolean,
  serviceLocation: null | string,
  requiredDocuments: null | boolean,
  contactInfo: null | string,
  isPatromonyIdRequired: boolean,
  updatedAt: Date;
}

    
export let listServices:  Array<serviceProps>
     export async function getAllServices(idSubgroup: string) {
       const getAllServices = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/subgroup/${idSubgroup}/service`,
              }) 
    .then( response => {
      listServices = response.data;

    } )
    }


    
        export let service: serviceProps
    export async function getService(id: any, ) {
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
export async function getUser ( id: string) {
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