
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import * as Icon from "phosphor-react";

import { Page } from "../../../../../components/Page";
import CardCategory from "../../../../../components/CardCategory";

import { getAllSubcategories, getCategory } from "../../../../../Utils/server/getInfo";
import { SubGroup } from '../../../../../Utils/server/types';

const Subcategory = () => {

  const router = useRouter();

  const [ subgroups, setSubgroups ] = useState<SubGroup[]>( [] );
  const [ groupTitle, setGroupTitle ] = useState<string>( "" );

  useEffect( () => {

    const fetchData = async () => {
      const groupTitles = await getCategory( router.query.subgroupId );
      const response = await getAllSubcategories( router.query.subgroupId );
      setGroupTitle( groupTitles.description );
      setSubgroups( response );

      return groupTitles;
    };

    fetchData();

  }, [] );

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
        </>
      }
    />
  );
};


export default Subcategory;
