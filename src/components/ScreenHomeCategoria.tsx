import * as Icon from "phosphor-react";
import CategoriaHomeMobile from "./CategoryHomeMobile";

function ScreenCategoriaHome () {



    return(
        <>
            <h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">Categorias</h4>        
            <div className="lg:w-[59.5rem] m-15 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-10 gap-y-6 mt-0">

                
                <CategoriaHomeMobile link="/servicebook/subcategory" Name={"NTI"} Icon={<Icon.Cpu  size={27}/>} />
                <CategoriaHomeMobile link="/Subcategorias" Name={"Biblioteca"} Icon={<Icon.BookOpen  size={27}/>} />
                <CategoriaHomeMobile link="/Subcategorias" Name={"NTI"} Icon={<Icon.Cpu  size={27}/>} />
                <CategoriaHomeMobile link="/Subcategorias" Name={"Manutenção"} Icon={<Icon.Wrench  size={27}/>} />
                <CategoriaHomeMobile link="/Subcategorias" Name={"NTI"} Icon={<Icon.FileText  size={27}/>} />
                <CategoriaHomeMobile link="/Subcategorias" Name={"Manutenção"} Icon={<Icon.Wrench  size={27}/>} />
                <CategoriaHomeMobile link="/Subcategorias" Name={"NTI"} Icon={<Icon.User  size={27}/>} />
                <CategoriaHomeMobile link="/Subcategorias" Name={"CRCA"} Icon={<Icon.Users  size={27}/>} />
                <CategoriaHomeMobile link="/Subcategorias" Name={"NAE"} Icon={<Icon.User  size={27}/>} />
                <CategoriaHomeMobile link="/Subcategorias" Name={"CRCA"} Icon={<Icon.Users  size={27}/>} />
                <CategoriaHomeMobile link="/Subcategorias" Name={"NAE"} Icon={<Icon.User  size={27}/>} />
                <CategoriaHomeMobile link="/Subcategorias" Name={"Outros"} Icon={<Icon.CrosshairSimple  size={27}/>} />
                <CategoriaHomeMobile link="/Subcategorias" Name={"DAP"} Icon={<Icon.Stack  size={27}/>} />
            </div>
        </>
    )
}

export default ScreenCategoriaHome;