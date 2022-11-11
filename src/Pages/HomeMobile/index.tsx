import {BookOpen, Cpu, FileText, List, Question, User, Users, Wrench,} from "phosphor-react";
import React from "react";
import CardHomeMobile from "../../components/CardHomeMobile";
import CategoriaHomeMobile from "../../components/CategoriaHomeMobile";
import Search from "../../components/Search";


function HomeMobile(){
    return(
       <div className="bg-white-strong-ice h-screen flex flex-col">
      
       <div className="h-40 bg-gradient w-full rounded-b-lg rounded-bl-lg text-white-100">
            <div className="flex justify-between mx-4 pt-5 items-center">
                <List size={24} />
                <div className="flex gap-6 items-center">
                    <Question size={20} className="mr-2" />
                    <div className="flex-1 flex">
                    <img
                        src="https://www.github.com/charliebellow.png"
                        alt="favicon"
                        className=" w-8 h-8 rounded-full  top-0"
                    />
                    </div>
                </div>
            </div>
       </div>
      
       <div className="flex flex-col gap-6 items-center">
        <CardHomeMobile />
        <Search placeholder={"O que está procurando?"} />
       </div>
      
       <h1 className="font-semibold text-base my-6 ml-8">Categorias</h1>
      
       <div className="mx-8 flex flex-wrap gap-2">

       <CategoriaHomeMobile Name={"Biblioteca"} Icon={<BookOpen  />} />
       <CategoriaHomeMobile Name={"NTI"} Icon={<Cpu />} />
       <CategoriaHomeMobile Name={"manutenção"} Icon={<Wrench />} />
       <CategoriaHomeMobile Name={"Infraestrutura"} Icon={<FileText />} />
       {/* Icon false */}
       <CategoriaHomeMobile Name={"CRCA"} Icon={<User />} />
       <CategoriaHomeMobile Name={"NAE"} Icon={<Users />} />


       </div>
       </div> 
    )
}

export default HomeMobile;

// alterar distância entre os cards