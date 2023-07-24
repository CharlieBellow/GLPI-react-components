
import * as React from 'react';
import CardGroup from "./CardGroup/CardGroup";
import { useRouter } from "next/router";
import {useEffect, useState} from "react"
import * as Icon from 'phosphor-react'
import {getAllGroups} from "../Utils/server/getInfo"
import { Group } from '../Utils/server/types';


// * lista de grupos, é exibido em '/servicebook/' ou '/servicebook/group'


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

    <div className="flex flex-col justify-center">
      <h4 className="m-15 mb-9 text-4xl font-semibold text-light-bg">Grupos</h4>
      <div className="m-15 mb-12 mt-0 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:w-[59.5rem] lg:grid-cols-4 tv:grid-cols-6">

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

