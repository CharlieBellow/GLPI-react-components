import { BookOpen } from "phosphor-react";
import CategoriaHomeMobile from "./CategoriaHomeMobile";

function ScreenCategoriaHome(){
    return(
        <div className="w-[59.5rem] m-15 grid grid-cols-4 gap-x-10 gap-y-6">
            <CategoriaHomeMobile Name={"Biblioteca"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"NTI"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"Biblioteca"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"NTI"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"Manutenção"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"NTI"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"Manutenção"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"NTI"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"CRCA"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"NAE"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"CRCA"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"NAE"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"Outros"} Icon={<BookOpen  size={27}/>} />
            <CategoriaHomeMobile Name={"DAP"} Icon={<BookOpen  size={27}/>} />
        </div>
    )
}

export default ScreenCategoriaHome;