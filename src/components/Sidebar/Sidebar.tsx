import * as Icon from "phosphor-react"
import ufalLogo from "../../../public/images/ufal-sigla-branca-fundo-transparente.png"
import { useState, useContext } from "react";
import SidebarContext from "./SidebarContext";
import SidebarItem from "./SidebarItem";
import CardMenu from "../Cards/CardMenu";
import Image from "next/image";
function Sidebar({children} :any){

    // ! adicionar as demais opções no menu

    const { open } = useContext(SidebarContext);
    const { openMenu } = useContext(SidebarContext);

    const Menus = [
        {
            title: 'Dashboard',
            path: '/Dashboard/',
            icon: <Icon.SquaresFour size={32}/>,
        },
        {
            title: 'Perfil',
            icon: <Icon.User size={32}/>,
            children: [
                {
                    title: "Alterar Dados",
                    dir: "/AlterarLogin/",
                },
                {
                    title: "Editar Perfil",
                    dir: "/EditarPerfil/",
                }
            ]
        },
    ];
    return(
        <div className="flex w-full h-full">
            <div className={`${open ? "w-[20rem] shadow-2xl lg:w-48 lg:shadow-none" : "w-0 lg:w-16"} z-40 fixed h-full overflow-x-hidden bg-blue-final-gradient ease-in-out duration-300 before:bg-gradient-to-r  before:-z-10 lg:static lg:block lg:h-auto lg:overflow-x-visible`}>
                <div className="flex flex-row w-full justify-center mb-4">
                    <Image className="mt-4 max-w-[6rem]" src={ufalLogo} alt="logo"/>
                </div>   
                {Menus.map((item, index) => {
                    return <SidebarItem item={item} key={index}/>
                })} 
            </div>       
            <div className="text-2xl font-semibold w-full h-screen">
                {children}
            </div>
        </div>
    )
}
export default Sidebar;