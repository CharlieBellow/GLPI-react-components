import CardHomeMobile from "./CardHomeMobile";
import CategoriaHomeMobile from "./CategoriaHomeMobile";
import {BookOpen, Cpu, FileText, List, Question, User, Users, Wrench,} from "phosphor-react";
import Search from "./Search";

function ScreenHomeMobile(){
    return(
        <>
            <div className=" flex flex-col mx-2 gap-6">
                    <CardHomeMobile />
                    <Search placeholder={"O que está procurando?"} />
            </div>
            
            <h1 className="font-semibold text-base my-6 ml-8">Categorias</h1>
            
            <div className="mx-auto flex flex-wrap gap-2 max-w-[19rem] justify-center">

                <CategoriaHomeMobile Name={"Biblioteca"} Icon={<BookOpen  />} />
                <CategoriaHomeMobile Name={"NTI"} Icon={<Cpu />} />
                <CategoriaHomeMobile Name={"manutenção"} Icon={<Wrench />} />
                <CategoriaHomeMobile Name={"Infraestrutura"} Icon={<FileText />} />
                {/* Icon false */}
                <CategoriaHomeMobile Name={"CRCA"} Icon={<User />} />
                <CategoriaHomeMobile Name={"NAE"} Icon={<Users />} />
            </div>
        </>
    )
}

export default ScreenHomeMobile;