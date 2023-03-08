import axios from "axios";

const baseURL = "http://172.27.12.171:3333"

// criar erros
export let category = []
 export async function getCategory(id) {
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


export let listCategories = []
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
export async function getAllSubcategories ( idCategory ) {
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
    export async function getSubcategory(id) {
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

        export let service = []
    export async function getService(id) {
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
export async function getUser ( id ) {
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