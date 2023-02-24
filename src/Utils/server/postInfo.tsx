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
 export async function getAllCategory() {
  const getCategory = await axios({
                method: 'get',
                baseURL: baseURL,
                url: "/servicebook/group",
              })

    }

     export async function getAllSubategory(values) {
  const getCategory = await axios({
                method: 'get',
                baseURL: baseURL,
                url: "/servicebook/subgroup",

              }) 
    }

    export async function getSubcategory(id) {
  const getCategory = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/subgroup/${id}`,
              })

    }

     export async function getAllService(values) {
  const getCategory = await axios({
                method: 'get',
                baseURL: baseURL,
                url: "/servicebook/service",
              }) 
    }

    export async function getService(id) {
  const getCategory = await axios({
                method: 'get',
                baseURL: baseURL,
                url: `/servicebook/service/${id}`,
              })

    }
