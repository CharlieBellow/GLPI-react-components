import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import Link from "next/link"
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import * as Icon from "phosphor-react";

import { Page } from "../../../../components/Page";
import CardGroup from "../../../../components/CardGroup";

import { getAllSubGroups , getGroup } from "../../../../Utils/server/getInfo";
import { SubGroup } from '../../../../Utils/server/types';


const baseURL = "http://172.27.12.171:3333";


const Subcategory = ( ) => {


  const router = useRouter();
  const { subGroupId } = router.query;


  const [ subgroups, setSubgroups ] = useState<SubGroup[]>( [] );
  const [ groupTitle, setGroupTitle ] = useState<string>( "" );

  useEffect( () => {
    if ( !router.isReady ) return;
    const fetchData = async () => {
      

      const category = await getGroup( subGroupId as string);
      const response = await getAllSubGroups ( subGroupId as string);
      
      setGroupTitle( category.description );
      setSubgroups( response );

      return category;
    };

    fetchData();

  }, [router.isReady, subGroupId] );

  const isAdmin = true

  return (
    <Page pagetitle={ "Subcategorias" }>
      <>
        <h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">
          Subcategorias
        </h4>

        <h5 className="text-xl font-bold m-8">{ groupTitle }</h5>
        <div className="lg:w-[59.5rem] m-15 grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-10  gap-y-6 mt-0">



          { subgroups && subgroups.map( ( subcategory ) => {

            return (

              <CardGroup link={ `/servicebook/subgroup/${ subcategory.id }/getAllServices` } Name={ subcategory.description } Icon={ <Icon.Archive size={ 27 } /> }
                key={ subcategory.id }
                idGroup={ subcategory.id }
              />

            );
          } )

          }


        </div>

         {isAdmin ? (<>
    <Link href="/servicebook/subgroup/createsubgroup" className="text-blue-ufal hover:underline-offset-1 hover:opacity-7  flex justify-end items-end content-end mr-12">+ Criar categoria</Link> 
    </>): <></>}
      </>
      </Page>
  );
};


export default Subcategory;
