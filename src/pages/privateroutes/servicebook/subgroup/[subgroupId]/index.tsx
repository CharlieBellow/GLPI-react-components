import axios from "axios";
import {useEffect, useState, useContext} from "react";
import { useRouter } from "next/router";
import * as Icon from "phosphor-react"


import { Page } from "../../../../../components/Page";
import CardGroup from "../../../../../components/CardGroup";
//import { useParams } from "react-router-dom";

import { RoutesContext } from "../../../../../Contexts/RouteContext";

import { getGroup, getAllSubGroups} from "../../../../../Utils/server/getInfo"
import { Group, SubGroup } from "../../../../../Utils/server/types";



const Subcategory = (  ) => {

  const router = useRouter()
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
			pagetitle={"Subcategorias"}
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
              } ) }

							
						
						{/*
            
            criar mais categorias dessa no serviceMod
            
            <CardCategory
							link="/ListServices"
							Name={ "Sistemas" }
							Icon={ <Icon.Cpu size={ 27 } /> } idCategory={ "" }						/>
						<CardCategory
							link="/ListServices"
							Name={ "Manutenção" }
							Icon={ <Icon.Wrench size={ 27 } /> } idCategory={ "" }						/>*/}
						{/*</div>*/}

						{/*<div className="flex flex-col gap-4 ">
							<h5 className="text-xl font-bold">Administrativo</h5>
							<CardCategory
								link="/ServiceLetter"
								Name={"DCE"}
								Icon={<Icon.Wrench size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"CRCA"}
								Icon={<Icon.FileText size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"Coordenação"}
								Icon={<Icon.Wrench size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"Financeiro"}
								Icon={<Icon.User size={27} />}
							/>
						</div>

						<div className="flex flex-col gap-4 ">
							<h5 className="text-xl font-bold">Biblioteca</h5>
							<CardCategory
								link="/ServiceLetter"
								Name={"CRCA"}
								Icon={<Icon.BookOpen size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"NAE"}
								Icon={<Icon.User size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"CRCA"}
								Icon={<Icon.Users size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"NAE"}
								Icon={<Icon.User size={27} />}
							/>
						</div>
						<div className="flex flex-col gap-4 ">
							<h5 className="text-xl font-bold">GAE</h5>
							<CardCategory
								link="/ServiceLetter"
								Name={"NAE"}
								Icon={<Icon.CrosshairSimple size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"DAP"}
								Icon={<Icon.Stack size={27} />}
							/>
						</div>*/}
					</div>
				</>
			}
		/>
	);
}
 
export default Subcategory;