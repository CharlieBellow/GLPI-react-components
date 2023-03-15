import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import Link from "next/link"
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import * as Icon from "phosphor-react";

import { Page } from "../../../../components/Page";
import CardCategory from "../../../../components/CardCategory";

import { getAllSubcategories, getCategory } from "../../../../Utils/server/getInfo";
import { SubGroup } from '../../../../Utils/server/types';


const baseURL = "http://172.27.12.171:3333";


const Subcategory = ( props: SubGroup ) => {


  const router = useRouter();
  const { subGroupId } = router.query;


  const [ subgroups, setSubgroups ] = useState<SubGroup[]>( [] );
  const [ groupTitle, setGroupTitle ] = useState<string>( "" );

  useEffect( () => {
    if ( !router.isReady ) return;
    const fetchData = async () => {
      

      const category = await getCategory( subGroupId);
      const response = await getAllSubcategories( subGroupId );
      
      setGroupTitle( category.description );
      setSubgroups( response );

      return category;
    };

    fetchData();

  }, [router.isReady] );

  const isAdmin = true

  return (
    <Page
      pagetitle={ "Subcategorias" }
      contentpage={
        <>
          <h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">
            Subcategorias
          </h4>

          <h5 className="text-xl font-bold m-8">{ groupTitle }</h5>
          <div className="lg:w-[59.5rem] m-15 grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-10  gap-y-6 mt-0">



            { subgroups && subgroups.map( ( subcategory ) => {

              return (

                <CardCategory link={ `/privateroutes/servicebook/subgroup/${ subcategory.id }/getAllServices` } Name={ subcategory.description } Icon={ <Icon.Archive size={ 27 } /> }
                  key={ subcategory.id }
                  idCategory={ subcategory.id }
                />

              );
            } )

            }


          </div>

           {isAdmin ? (<>
      <Link href="./createsubcategory" className="text-blue-ufal hover:underline-offset-1 hover:opacity-7  flex justify-end items-end content-end mr-12">+ Criar categoria</Link> 
      </>): <></>}
        </>
      }
    />
  );
};


export default Subcategory;
