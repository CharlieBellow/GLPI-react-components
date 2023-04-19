import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import * as Icon from "phosphor-react";

import CardGroup from "../../../../components/CardGroup/CardGroup";

import { getAllSubGroups , getGroup } from "../../../../Utils/server/getInfo";
import { SubGroup } from '../../../../Utils/server/types';
import Head from "next/head";


const baseURL = "http://172.27.12.171:3333";

// * tela subgrupos de um grupo 'servicebook/subgroup/[id:grupo]'

const Subgroups = ( ) => {


  const router = useRouter();
  const { subGroupId } = router.query;


  const [ subgroups, setSubgroups ] = useState<SubGroup[]>( [] );
  const [ groupTitle, setGroupTitle ] = useState<string>( "" );

  useEffect( () => {
    if ( !router.isReady ) return;
    const fetchData = async () => {
      const [group, response] = await Promise.all([
          getGroup( subGroupId as string),
          getAllSubGroups ( subGroupId as string)]
      );
        
      setGroupTitle( group.description );
      setSubgroups( response );

      return group;
    };

    fetchData();

  }, [router.isReady, subGroupId] );

  const isAdmin = true
  return (
    <>
    <Head>
      <title>{"Subgrupos"}</title>
    </Head>
      <>
        <h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">
          Subgrupos
        </h4>
        <h5 className="text-xl font-bold m-8">{ groupTitle }</h5>
        <div className="lg:w-[59.5rem] m-15 grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-10  gap-y-6 mt-0">
          { subgroups && subgroups.map( ( subgroup ) => {
            return (
              <CardGroup link={ `/servicebook/subgroup/${ subgroup.id }/services` } Name={ subgroup.description } Icon={ <Icon.Archive size={ 27 } /> }
                key={ subgroup.id }
                idGroup={ subgroup.id }
              />
            );
          })}
        </div>   
      </>
    </>
  );
};


export default Subgroups;
