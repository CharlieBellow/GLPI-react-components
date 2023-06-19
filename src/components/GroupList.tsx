
import * as React from 'react';
import CardGroup from "./CardGroup/CardGroup";
import { useRouter } from "next/router";
import {useEffect, useState} from "react"
import * as Icon from 'phosphor-react'
import {getAllGroups} from "../Utils/server/getInfo"
import { Group } from '../Utils/server/types';


// * lista de grupos, é exibido em '/servicebook/' ou '/servicebook/group'
// const groups = [
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "GTI",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "Biblioteca",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "GTI",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "CRCA",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "Direção",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "NAE",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "Saúde",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "COINFRA",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "CORH",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "Transporte",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "Secretarias",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "COPLAN",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
//   {createdAt: "2023-02-17T17:23:59.579Z",description: "COGRAD",id: "35be846f-55ba-48d0-a752-d22a9a82eb47",updatedAt: "2023-02-17T17:23:59.579Z"},
  
// ]

export default function GroupList () {
  const router = useRouter()
  const [groups, setGroups] = useState<Group[]>([])

  useEffect(() => {

    if (!router.isReady) return;
    const fetchData = async () => {
      const response = await getAllGroups()
      setGroups(response);     
    }

    fetchData();
      
  },[router.isReady]);
    
const isAdmin = true
  return (

    <div className="flex justify-center flex-col">
      <h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">Grupos</h4>
      <div className="lg:w-[59.5rem] m-15 grid tv:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-10 gap-y-6 mt-0 mb-12">

        {groups && groups.map( ( group ) => {
          return (
              <CardGroup link={ `/servicebook/subgroup/${ group.id }` } Name={ group.description } Icon={ <Icon.Books size={ 27 }/> }
                key={ group.id }
                idGroup={ group.id }
              />

          );
        } ) }
        
      </div>
    </div>
  );
};

