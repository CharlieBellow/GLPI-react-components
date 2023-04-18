
import * as React from 'react';
import CardGroup from "./CardGroup";
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

    <div className="h-auto">
      <h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">Grupos</h4>
      <div className="lg:w-[59.5rem] m-15 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-10 gap-y-6 mt-0 mb-12">

        {groups && groups.map( ( group ) => {
          return (
              <CardGroup link={ `/servicebook/subgroup/${ group.id }` } Name={ group.description } Icon={ <Icon.Books size={ 27 }/> }
                key={ group.id }
                idGroup={ group.id }
              />

          );
        } ) }
        
      </div>
    </>
  );
};

