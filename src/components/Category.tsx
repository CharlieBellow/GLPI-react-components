import * as React from 'react';
import axios from "axios";
import CardCategory from "./CardCategory";

import { useRouter } from "next/router";
import {useEffect, useState} from "react"
import * as Icon from 'phosphor-react'
import {getAllCategories} from "../Utils/server/getInfo"
import { Group } from '../Utils/server/types';


export default function Category () {
  const router = useRouter()

  const [categories, setCategories] = useState<Group[]>([])

  useEffect(() => {

    const fetchData = async () => {
      const response = await getAllCategories()
      setCategories(response);      
    }

    fetchData();
      
  },[]);
    

  return (

    <>
      <h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">Categorias</h4>
      <div className="lg:w-[59.5rem] m-15 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-10 gap-y-6 mt-0">

        {categories && categories.map( ( category ) => {
          return (
              <CardCategory link={ `/privateroutes/servicebook/subgroup/${ category.id }` } Name={ category.description } Icon={ <Icon.Books size={ 27 }/> }
                key={ category.id }
                idCategory={ category.id }
              />

          );
        } ) }
      </div>
    </>
  );
};




//criar esses cards lá no banco
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


