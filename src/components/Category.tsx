import * as React from 'react';

import CardCategory from "./CardCategory";
import { categoryModel } from "../Utils/ServiceModels";
import { Page } from "./Page";
import { useContext } from 'react';
import {RoutesContext} from '../Contexts/RouteContext'



export default function Category () {

    //const { titleCategory } = useParams()

  const {setCategory, category} = useContext( RoutesContext )
  console.log( "category", category );
  
    return (
        <>
            <Page pagetitle={ "" } contentpage={
                <>
                    <h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">Categorias</h4>
                    <div className="lg:w-[59.5rem] m-15 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-10 gap-y-6 mt-0">

              { categoryModel.map( ( category, index ) => {
                console.log( "meu id", categoryModel[ index ].id )
                            return (
                                <>

                                <CardCategory link={ `/servicebook/${ category.titleCategory}` } Name={ category.titleCategory } Icon={ category.icon }
                                    key={ category.id }
                                  idCategory={ category.id}
                                    />
                            { setCategory( category.id )}
                                </>
                            );
                        } ) }
                    </div>
                </>
            } />;
            {/*<CardCategory link="/Subcategorias" Name={"Biblioteca"} Icon={<Icon.BookOpen  size={27}/>} />
                <CardCategory link="/Subcategorias" Name={"NTI"} Icon={<Icon.Cpu  size={27}/>} />
                <CardCategory link="/Subcategorias" Name={"Manutenção"} Icon={<Icon.Wrench  size={27}/>} />
                <CardCategory link="/Subcategorias" Name={"NTI"} Icon={<Icon.FileText  size={27}/>} />
                <CardCategory link="/Subcategorias" Name={"Manutenção"} Icon={<Icon.Wrench  size={27}/>} />
                <CardCategory link="/Subcategorias" Name={"NTI"} Icon={<Icon.User  size={27}/>} />
                <CardCategory link="/Subcategorias" Name={"CRCA"} Icon={<Icon.Users  size={27}/>} />
                <CardCategory link="/Subcategorias" Name={"NAE"} Icon={<Icon.User  size={27}/>} />
                <CardCategory link="/Subcategorias" Name={"CRCA"} Icon={<Icon.Users  size={27}/>} />
                <CardCategory link="/Subcategorias" Name={"NAE"} Icon={<Icon.User  size={27}/>} />
                <CardCategory link="/Subcategorias" Name={"Outros"} Icon={<Icon.CrosshairSimple  size={27}/>} />
                <CardCategory link="/Subcategorias" Name={"DAP"} Icon={<Icon.Stack  size={27}/>} />*/}

        </>
    );
}

;