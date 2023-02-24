import axios from "axios";

const baseURL = "http://172.27.12.171:3333"

// criar erros

 export async function getCategory(id) {
  const getCategory = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/group/${id}`,
              })

    }


export let listCategory = []
 export async function getAllCategory() {
  const getCategory = await axios({
                method: 'get',
                baseURL: baseURL,
                url: "/servicebook/group",
              })
              .then(response => {
                listCategory = response.data
                
              })

    }

    export let listSubcategory = []
     export async function getAllSubcategory() {
  const getCategory = await axios({
                method: 'get',
                baseURL: baseURL,
                url: "/servicebook/subgroup",

  } ) 
    .then( response => {
      listSubcategory = response.data;

    } )
    }

    export async function getSubcategory(id) {
      const getCategory = await axios({
        method: 'get',
        baseURL: baseURL,
        url: `/servicebook/subgroup/${id}`,
      })
      
      
    }
    
    export let listService = []
     export async function getAllService() {
  const getCategory = await axios({
                method: 'get',
                baseURL: baseURL,
                url: "/servicebook/service",
              }) 
    .then( response => {
      listService = response.data;

    } )
    }

    export async function getService(id) {
  const getCategory = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/service/${id}`,
              })
              

    }
