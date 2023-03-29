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
                    title: "Alterar Perfil",
                    dir: "/user/updateuser",
                },
                {
                    title: "Visualizar Perfil",
                    dir: "/user/userinfo/",
                }
            ]
        },
        {
            title: 'Carta de Serviço',
            icon: <Icon.Signpost size={32}/>,
            children: [
                {
                    title: "Catregorias",
                    dir: "/servicebook/",
                },
                {
                    title: "Lista de Categorias (Admin)",
                    dir: "/servicebook/group/creategroup/",
                }
            ]
        },
        {
            title: 'RU',
            icon: <Icon.CookingPot size={32}/>,
            path: "/Dashboard/"
        },
        {
            title: 'Configurações',
            icon: <Icon.SlidersHorizontal size={32}/>,
            path: "/Dashboard/"
            // aqui tem que abrir o modal de configurações 
        },
    ];
    return(
        <div className="flex w-full h-full">
            <div className={`${open ? "w-[20rem] lg:w-48" : "w-0 lg:w-16"} fixed h-full overflow-x-hidden bg-blue-final-gradient ease-in-out duration-300 before:bg-gradient-to-r  before:-z-10 lg:static lg:block lg:h-auto lg:overflow-x-visible`}>
                <div className="flex flex-row w-full justify-center mb-4">
                    <Image className="mt-4 max-w-[6rem]" src={ufalLogo} alt="logo"/>
                </div>   
                {Menus.map((item, index) => {
                    return <SidebarItem item={item} key={index}/>
                })} 
            </div>       
            <div className="w-full h-screen">
                {children}
            </div>
        </div>
    )
}
export default Sidebar;