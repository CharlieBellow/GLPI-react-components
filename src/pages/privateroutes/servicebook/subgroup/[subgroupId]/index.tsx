
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import * as Icon from "phosphor-react";

import { Page } from "../../../../../components/Page";
import CardGroup from "../../../../../components/CardGroup";
//import { useParams } from "react-router-dom";

import { getGroup, getAllSubGroups} from "../../../../../Utils/server/getInfo"
import { Group, SubGroup } from "../../../../../Utils/server/types";

const Subgroup = () => {

  const router = useRouter();
  const [ groupTitle, setGroupTitle ] = useState<string>( "" );
  const [subgroups, setSubgroups] = useState<SubGroup[]>([])
  const [group, setGroup] = useState<Group>()
  useEffect(() => {

    const fetchData = async () => {
		
      const groupResponse = await getGroup(router.query.subgroupId as string)
      setGroup(groupResponse);      
      const subgroupsResponse = await getAllSubGroups(groupResponse.id)
      setSubgroups(subgroupsResponse);      
    }

    fetchData();
      
  },[]);
  
//get server render


  return (
    <Page
      pagetitle={ "Subcategorias" }
      contentpage={
        <>
          <h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">
            Subcategorias
          </h4>

          <h5 className="text-xl font-bold m-8">{group && group.description}</h5>
					<div className="lg:w-[59.5rem] m-15 grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-10  gap-y-6 mt-0">
					
					

            {subgroups && subgroups.map( ( subgroup ) => {
                
                return (
                  
                    <CardGroup link={ `/privateroutes/servicebook/subgroup/${ subgroup.id }/getAllServices` } Name={ subgroup.description } Icon={ <Icon.Archive size={ 27 }/> }
                      key={ subgroup.id }
                      idGroup={ subgroup.id }
                    />

              );
            } )

            }


          </div>
        </>
      }
    />
  );
};


export default Subgroup;
